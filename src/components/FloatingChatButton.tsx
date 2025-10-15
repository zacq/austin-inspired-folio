import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { MessageCircle } from "lucide-react";

export function FloatingChatButton() {
  const { toggleSidebar, isMobile, open, openMobile } = useSidebar();

  const isOpen = isMobile ? openMobile : open;

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-fuchsia-500 hover:bg-fuchsia-400 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label={isOpen ? "Close chat" : "Open chat"}
      onClick={toggleSidebar}
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
}