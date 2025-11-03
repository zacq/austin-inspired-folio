import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { ChatSidebar } from "@/components/ChatSidebar";
import { FloatingChatButton } from "@/components/FloatingChatButton";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full">
        <SidebarInset className="flex-1">
          <div className="min-h-screen">
            <Navigation />
            <main>
              <section id="home">
                <Hero />
              </section>
              <Services />
              <Partners />
              <Portfolio />
              <Contact />
              <Testimonials />
            </main>
            <Footer />
          </div>
        </SidebarInset>
        
        <ChatSidebar />
        <FloatingChatButton />
      </div>
    </SidebarProvider>
  );
};

export default Index;
