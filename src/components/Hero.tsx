import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hexagonal pattern background with flowing waves */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Intelligent Automation for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Businesses.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with AI-powered automation. We build custom solutions that streamline operations, boost productivity, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300 px-10 py-6 text-lg font-semibold text-white group"
            >
              Automate Your Business
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            Trusted by 50+ businesses to automate their growth
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