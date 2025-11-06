import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hexagonal pattern background with flowing waves */}
      <HeroBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
            <span className="text-gray-900 dark:text-white text-sm font-medium">
              Automated Lead Generation
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Intelligent Automation for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Businesses.
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Neuraflow brings AI automation to your fingertips & streamline tasks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300 px-8 py-4 text-lg font-medium text-white"
            >
              Get in touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 px-8 py-4 text-lg font-medium"
            >
              View services
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            Over 50+ business trust us
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary dark:border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary dark:bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;