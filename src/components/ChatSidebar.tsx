import { useEffect, useState } from "react";
import { Send, X } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  suggestions?: string[];
}

export function ChatSidebar() {
  const { setOpenMobile, setOpen, isMobile, open, openMobile } = useSidebar();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 I'm Nuera, your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
      suggestions: [
        "⚙️ Show me how AI can automate my business workflows.",
        "📈 I want to capture more leads and convert faster.",
        "🧠 Can you help me build an AI dashboard for my business?",
        "🤖 What kind of automations does NeuraFlow specialize in?",
        "💬 I'd like to see examples of previous AI projects.",
        "🧩 How can I integrate AI with my CRM or WhatsApp?",
        "🚀 I'm ready to get a free workflow audit.",
      ],
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [sessionId, setSessionId] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    try {
      const existing = localStorage.getItem("chatSessionId");
      if (existing) {
        setSessionId(existing);
        // Prevent auto-scroll on mount
        window.scrollTo(0, 0);
        return;
      }
      const generated = (globalThis as any)?.crypto?.randomUUID
        ? (globalThis as any).crypto.randomUUID()
        : `sid-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem("chatSessionId", generated);
      setSessionId(generated);
    } catch {
      // Fallback if localStorage is unavailable
      const generated = `sid-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      setSessionId(generated);
    }

    // Prevent auto-scroll on mount
    window.scrollTo(0, 0);
  }, []);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputText.trim();
    if (!textToSend) return;

    // Hide suggestions after first user message
    setShowSuggestions(false);

    const newMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    const userMessage = textToSend;
    setInputText("");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const baseUrl = 'https://primary-production-cd196.up.railway.app/webhook-test/eb5f8df0-c0b2-4598-9bf1-4a1dd2d94802';
      
      // Try different query parameter names for GET request, always include sessionId
      const queryParams = [
        `message=${encodeURIComponent(userMessage)}&sessionId=${encodeURIComponent(sessionId)}`,
        `text=${encodeURIComponent(userMessage)}&sessionId=${encodeURIComponent(sessionId)}`,
        `prompt=${encodeURIComponent(userMessage)}&sessionId=${encodeURIComponent(sessionId)}`,
        `input=${encodeURIComponent(userMessage)}&sessionId=${encodeURIComponent(sessionId)}`,
      ];

      let lastError: unknown = null;
      let successText: string | null = null;

      for (const param of queryParams) {
        try {
          const url = `${baseUrl}?${param}`;
          const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'omit',
            headers: {
              'Accept': 'application/json, text/plain;q=0.8, */*;q=0.5',
            },
            signal: controller.signal,
          });

          // Read response safely as JSON or text
          const contentType = response.headers.get('content-type') || '';
          let parsed: any = null;
          try {
            if (contentType.includes('application/json')) {
              parsed = await response.json();
            } else {
              const text = await response.text();
              parsed = { text };
            }
          } catch (e) {
            // If parsing fails, capture raw text if possible
            try {
              const fallbackText = await response.text();
              parsed = { text: fallbackText };
            } catch (_) {
              parsed = null;
            }
          }

          if (!response.ok) {
            lastError = new Error(`HTTP ${response.status}: ${parsed?.error || parsed?.message || 'Request failed'}`);
            continue; // try next query param
          }

          // Normalize possible fields for the bot reply (supports nested shapes)
          const extractReply = (data: any): string | null => {
            if (data == null) return null;
            if (typeof data === 'string') return data;
            if (typeof data === 'number' || typeof data === 'boolean') return String(data);
            // Common flat keys
            const direct = data.response || data.message || data.reply || data.text || data.content || data.result || data.output;
            if (typeof direct === 'string' && direct.trim()) return direct;
            // OpenAI-like shapes
            const openAi = data.choices?.[0]?.message?.content || data.choices?.[0]?.text;
            if (typeof openAi === 'string' && openAi.trim()) return openAi;
            // n8n often nests under data or payload
            const nestedData = extractReply(data.data) || extractReply(data.payload) || extractReply(data.body) || extractReply(data.response);
            if (nestedData) return nestedData;
            // Arrays: pick first stringy item
            if (Array.isArray(data) && data.length > 0) {
              const arrVal = extractReply(data[0]);
              if (arrVal) return arrVal;
            }
            // Deep search first string value
            try {
              for (const key of Object.keys(data)) {
                const val = extractReply(data[key]);
                if (val) return val;
              }
            } catch (_) {
              // ignore
            }
            return null;
          };

          const reply = extractReply(parsed);

          // As a last resort, show compact JSON to aid debugging instead of fallback text
          successText = reply || (parsed ? (() => {
            try { return typeof parsed === 'object' ? JSON.stringify(parsed) : String(parsed); } catch { return null; }
          })() : null) || 'Thanks for your message!';
          break; // success
        } catch (e) {
          lastError = e;
          // try next query param
          continue;
        }
      }

      clearTimeout(timeoutId);

      if (successText) {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: successText,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        return;
      }

      throw lastError ?? new Error('Unknown webhook error');
    } catch (error: any) {
      console.error('Error sending message to webhook:', error);
      const details = typeof error?.message === 'string' ? ` (${error.message})` : '';
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Sorry, I'm having trouble connecting right now${details}. Please try again later.`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const isOpen = isMobile ? openMobile : open;
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[320px] max-w-[90vw] rounded-xl border bg-background shadow-xl">
      <div className="flex items-center justify-between px-3 py-1.5 border-b">
        <h2 className="text-sm font-semibold">Nuera</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => (isMobile ? setOpenMobile(false) : setOpen(false))}
          className="h-6 w-6"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex h-[360px] flex-col">
        <ScrollArea className="flex-1 p-3">
          <div className="space-y-3">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-2.5 py-1.5 text-sm ${
                      message.sender === "user"
                        ? "bg-fuchsia-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>

                {/* Suggestion chips */}
                {message.suggestions && showSuggestions && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-1">
                    {message.suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(suggestion)}
                        className="text-xs px-2.5 py-1.5 rounded-full bg-fuchsia-500/10 hover:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-500/30 hover:border-fuchsia-500/50 transition-all duration-200 hover:scale-105"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-1.5">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button className="bg-fuchsia-500 hover:bg-fuchsia-400" size="icon" onClick={handleSendMessage} disabled={!inputText.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}