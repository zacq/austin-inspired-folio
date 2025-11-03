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
}

interface ChatInterfaceProps {
  webhookUrl?: string;
}

const ChatInterface = ({ webhookUrl }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = inputText.trim();
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
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
            timestamp: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const botResponse = data.response || data.message || "I received your message!";
          
          const botMessageObj: Message = {
            id: (Date.now() + 1).toString(),
            text: botResponse,
            sender: "bot",
            timestamp: new Date(),
          };
          
          setMessages((prev) => [...prev, botMessageObj]);
        } else {
          throw new Error("Failed to get response");
        }
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
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessageObj: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
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
    <Card className="relative h-[600px] flex flex-col border-border/50 bg-secondary/30 backdrop-blur-sm shadow-2xl overflow-hidden group">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="absolute inset-[1px] bg-background rounded-lg" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 p-6 border-b border-border/50 bg-gradient-to-r from-primary/10 to-purple-500/10">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">AI Assistant</h3>
            <p className="text-xs text-muted-foreground">Online • Ready to help</p>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-3 animate-fade-in ${
                  message.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === "user"
                      ? "bg-gradient-primary"
                      : "bg-secondary border border-border"
                  }`}
                >
                  {message.sender === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-primary" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-gradient-primary text-white rounded-tr-sm"
                      : "bg-secondary border border-border text-foreground rounded-tl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                    {message.text}
                  </p>
                  <span
                    className={`text-xs mt-1 block ${
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
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-secondary border border-border rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t border-border/50 bg-background/50">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              className="flex-1 bg-background border-border/50 focus:border-primary transition-all duration-300"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group/button"
              size="lg"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5 group-hover/button:translate-x-1 transition-transform duration-300" />
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Press Enter to send • Shift + Enter for new line
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;

