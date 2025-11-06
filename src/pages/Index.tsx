import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const Index = () => {
  // Ensure page starts at the top on load
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);

    // Also scroll after a short delay to handle any async content
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

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

        <FloatingWhatsAppButton />
      </div>
    </SidebarProvider>
  );
};

export default Index;
