import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dark background with subtle gradient */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-8">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
            <span className="text-foreground text-sm font-medium">
              Automated Lead Generation
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Intelligent Automation for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Businesses.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            ActionPulse brings AI automation to your fingertips & streamline tasks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300 px-8 py-4 text-lg font-medium"
            >
              Get in touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border bg-transparent text-foreground hover:bg-secondary transition-all duration-300 px-8 py-4 text-lg font-medium"
            >
              View services
            </Button>
          </div>
          
          {/* Trust indicator */}
          <div className="text-muted-foreground text-sm">
            Over 50+ business trust us
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;