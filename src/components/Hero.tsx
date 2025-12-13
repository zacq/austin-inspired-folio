import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroMessages = [
    {
      title: "Stop Scaling Effort. Start Scaling Intelligence.",
      description: "Most businesses don't fail from lack of work. They fail from repeating work that should already be automated."
    },
    {
      title: "You Don't Need a Louder Megaphone. You Need Smarter Follow-Ups.",
      description: "Attention is cheap. Consistent, intelligent follow-up is where fortunes are quietly made."
    },
    {
      title: "Your Best Employee Shouldn't Sleep.",
      description: "AI agents work 24/7 capturing leads, answering questions, and moving deals forward while your team focuses on what matters."
    },
    {
      title: "Every Manual Task Is a Hidden Tax on Growth.",
      description: "If a process repeats, it should run itself. Automation removes friction, delay, and human bottlenecks."
    },
    {
      title: "Turn Conversations Into Conversions Automatically.",
      description: "From social media DMs to website chats, NeuraFlow opens interactions and guides them to outcomes without delay."
    },
    {
      title: "Speed Wins. Automation Decides Who's Fast Enough.",
      description: "The market doesn't wait. Businesses that automate respond faster, close faster, and learn faster."
    },
    {
      title: "Build Systems That Run the Business Without You.",
      description: "NeuraFlow connects AI, workflows, and data into self-running processes that scale revenue and reduce chaos."
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMessages.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroMessages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroMessages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroMessages.length) % heroMessages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

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
          {/* Carousel Content */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            {heroMessages.map((message, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight px-4">
                  {message.title.split('.')[0]}.{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {message.title.split('.').slice(1).join('.')}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                  {message.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
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

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {heroMessages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-8 h-2 bg-gradient-primary'
                      : 'w-2 h-2 bg-secondary hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Trust indicator */}
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