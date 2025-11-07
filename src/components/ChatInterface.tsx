import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  suggestions?: string[];
}

interface ChatInterfaceProps {
  webhookUrl?: string;
}

const ChatInterface = ({ webhookUrl }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 I'm Neura, your AI assistant. How can I help you today?",
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
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [sessionId, setSessionId] = useState<string>("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  // Generate or retrieve session ID
  useEffect(() => {
    const storedSessionId = localStorage.getItem('chat-interface-session-id');
    if (storedSessionId) {
      setSessionId(storedSessionId);
    } else {
      const newSessionId = `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      localStorage.setItem('chat-interface-session-id', newSessionId);
      setSessionId(newSessionId);
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive (but not on initial mount)
  useEffect(() => {
    // Skip scroll on initial mount to prevent page auto-scroll
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Scroll within the chat container only, not the entire page
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputText.trim();
    if (!textToSend || isLoading) return;

    // Hide suggestions after first user message
    setShowSuggestions(false);

    const userMessage = textToSend;
    const userMessageObj: Message = {
      id: Date.now().toString(),
      text: userMessage,
      sender: "user",
      timestamp: new Date(),
    };

    // Add user message
    setMessages((prev) => [...prev, userMessageObj]);
    setInputText("");
    setIsLoading(true);

    try {
      // If webhook URL is provided, send to N8n
      if (webhookUrl && sessionId) {
        console.log('🔵 ChatInterface: Sending message to webhook');
        console.log('📍 Webhook URL:', webhookUrl);
        console.log('🆔 Session ID:', sessionId);
        console.log('💬 Message:', userMessage);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

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
            const url = `${webhookUrl}?${param}`;
            console.log('🌐 Attempting request:', url);

            const response = await fetch(url, {
              method: 'GET',
              mode: 'cors',
              credentials: 'omit',
              headers: {
                'Accept': 'application/json, text/plain;q=0.8, */*;q=0.5',
              },
              signal: controller.signal,
            });

            console.log('✅ Response received:', {
              status: response.status,
              statusText: response.statusText,
              ok: response.ok,
              headers: Object.fromEntries(response.headers.entries())
            });

            // Read response safely as JSON or text
            const contentType = response.headers.get('content-type') || '';
            let parsed: any = null;
            let rawText: string = '';

            try {
              // First, get the raw text
              rawText = await response.text();
              console.log('📄 Raw response text:', rawText);

              // Try to parse as JSON
              if (rawText && rawText.trim()) {
                try {
                  parsed = JSON.parse(rawText);
                  console.log('📦 Parsed as JSON:', parsed);
                } catch (jsonError) {
                  // If not JSON, treat as plain text
                  parsed = { text: rawText };
                  console.log('📦 Parsed as plain text:', parsed);
                }
              } else {
                parsed = null;
                console.log('⚠️ Empty response body');
              }
            } catch (e) {
              console.error('❌ Error reading response:', e);
              parsed = null;
            }

            console.log('📦 Final parsed response:', parsed);

            if (!response.ok) {
              lastError = new Error(`HTTP ${response.status}: ${parsed?.error || parsed?.message || 'Request failed'}`);
              console.log('❌ Response not OK, trying next parameter...');
              continue;
            }

            // Extract reply from response - enhanced for n8n responses
            const extractReply = (data: any): string | null => {
              console.log('🔍 Extracting reply from:', data);

              if (data == null) {
                console.log('❌ Data is null/undefined');
                return null;
              }

              // If it's a plain string, return it
              if (typeof data === 'string' && data.trim()) {
                console.log('✅ Found plain string:', data);
                return data;
              }

              if (typeof data === 'number' || typeof data === 'boolean') {
                console.log('✅ Found number/boolean:', data);
                return String(data);
              }

              // Try common response field names
              const direct = data.response || data.message || data.reply || data.text || data.content || data.result || data.output || data.answer || data.bot_response;
              if (typeof direct === 'string' && direct.trim()) {
                console.log('✅ Found in direct field:', direct);
                return direct;
              }

              // OpenAI format
              const openAi = data.choices?.[0]?.message?.content || data.choices?.[0]?.text;
              if (typeof openAi === 'string' && openAi.trim()) {
                console.log('✅ Found in OpenAI format:', openAi);
                return openAi;
              }

              // Try nested data structures
              const nestedData = extractReply(data.data) || extractReply(data.payload) || extractReply(data.body) || extractReply(data.response);
              if (nestedData) {
                console.log('✅ Found in nested data:', nestedData);
                return nestedData;
              }

              // If it's an array, try the first item
              if (Array.isArray(data) && data.length > 0) {
                const firstItem = extractReply(data[0]);
                if (firstItem) {
                  console.log('✅ Found in array first item:', firstItem);
                  return firstItem;
                }
              }

              console.log('❌ No reply found in data structure');
              return null;
            };

            successText = extractReply(parsed);
            console.log('🔍 Final extracted text:', successText);

            // If response is successful (200 OK) but empty, treat as success with default message
            if (response.ok && !successText) {
              console.log('✅ Webhook reached but returned empty response - showing acknowledgment');
              clearTimeout(timeoutId);
              const botMessageObj: Message = {
                id: (Date.now() + 1).toString(),
                text: "Thank you for your message! I've received it and will process your request. Our team will get back to you shortly.",
                sender: "bot",
                timestamp: new Date(),
              };
              setMessages((prev) => [...prev, botMessageObj]);
              setIsLoading(false);
              return;
            }

            if (successText) {
              console.log('✅ Success! Displaying bot response');
              clearTimeout(timeoutId);
              const botMessageObj: Message = {
                id: (Date.now() + 1).toString(),
                text: successText,
                sender: "bot",
                timestamp: new Date(),
              };
              setMessages((prev) => [...prev, botMessageObj]);
              setIsLoading(false);
              return;
            }
          } catch (err: any) {
            if (err.name === 'AbortError') {
              lastError = new Error('Request timed out after 15 seconds');
              break;
            }
            lastError = err;
            continue;
          }
        }

        clearTimeout(timeoutId);

        // If we got here, all attempts failed
        if (successText) {
          const botMessageObj: Message = {
            id: (Date.now() + 1).toString(),
            text: successText,
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessageObj]);
          setIsLoading(false);
          return;
        }

        throw lastError ?? new Error('Unknown webhook error');
      } else {
        // Simulate bot response for demo
        setTimeout(() => {
          const botMessageObj: Message = {
            id: (Date.now() + 1).toString(),
            text: "Thanks for your message! This is a demo response. Connect your N8n webhook to get real AI responses.",
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessageObj]);
          setIsLoading(false);
        }, 1000);
        return;
      }
    } catch (error: any) {
      console.error("Error sending message:", error);
      const details = typeof error?.message === 'string' ? ` (${error.message})` : '';
      const errorMessageObj: Message = {
        id: (Date.now() + 1).toString(),
        text: `Sorry, I'm having trouble connecting right now${details}. Please try again later.`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessageObj]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="relative h-[520px] flex flex-col border-border/50 bg-secondary/30 backdrop-blur-sm shadow-2xl overflow-hidden group">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="absolute inset-[1px] bg-background rounded-lg" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-border/50 bg-gradient-to-r from-primary/10 to-purple-500/10">
          <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Neura</h3>
            <p className="text-xs text-muted-foreground">Online • Ready to help</p>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div key={message.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div
                  className={`flex gap-2.5 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user"
                        ? "bg-gradient-primary"
                        : "bg-secondary border border-border"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 text-primary" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[75%] rounded-2xl px-3 py-2 ${
                      message.sender === "user"
                        ? "bg-gradient-primary text-white rounded-tr-sm"
                        : "bg-secondary border border-border text-foreground rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                      {message.text}
                    </p>
                    <span
                      className={`text-xs mt-0.5 block ${
                        message.sender === "user"
                          ? "text-white/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>

                {/* Suggestion chips */}
                {message.suggestions && showSuggestions && (
                  <div className="flex flex-wrap gap-2 mt-3 ml-9">
                    {message.suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(suggestion)}
                        className="text-xs px-3 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-200 hover:scale-105 hover:shadow-md"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-2.5 animate-fade-in">
                <div className="w-7 h-7 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="bg-secondary border border-border rounded-2xl rounded-tl-sm px-3 py-2">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-3 border-t border-border/50 bg-background/50">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              className="flex-1 bg-background border-border/50 focus:border-primary transition-all duration-300 text-sm"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group/button"
              size="default"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300" />
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5 text-center">
            Press Enter to send • Shift + Enter for new line
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;

