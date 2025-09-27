import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { MessageCircle } from "lucide-react";

export function FloatingChatButton() {
  const { setOpenMobile } = useSidebar();

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label="Open chat"
      onClick={() => setOpenMobile(true)}
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
    </Button>
  );
}