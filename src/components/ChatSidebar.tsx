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
}

export function ChatSidebar() {
  const { setOpenMobile, setOpen, isMobile, open, openMobile } = useSidebar();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    try {
      const existing = localStorage.getItem("chatSessionId");
      if (existing) {
        setSessionId(existing);
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
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    const userMessage = inputText;
    setInputText("");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const baseUrl = 'https://primary-production-3b968.up.railway.app/webhook/31acc7ad-ca70-4fac-8574-b042141f8a98';
      
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
    <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[90vw] rounded-xl border bg-background shadow-xl">
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <h2 className="text-sm font-semibold">Chat Support</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => (isMobile ? setOpenMobile(false) : setOpen(false))}
          className="h-6 w-6"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex h-[420px] flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    message.sender === "user"
                      ? "bg-fuchsia-500 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-2">
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