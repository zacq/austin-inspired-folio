import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 text-foreground py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4 group">
              <div className="relative">
                <Logo className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Neuraflow.ai
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              NeuraFlow.ai builds AI-powered systems that remove friction and drive growth. We design intelligent workflows, custom CRMs, and digital experiences that help teams capture more leads, close deals faster, and scale with clarity.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-gradient-primary hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/zachary-munene-40598685"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-gradient-primary hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01ab46874898aabdf9?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-gradient-primary hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
                aria-label="Upwork"
              >
                <svg className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
              </a>
              <a
                href="mailto:john.doe@example.com"
                className="group w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-gradient-primary hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                  Blog
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="font-semibold">Courses</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Services
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Business Automation
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Voice Lead Response System
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                WhatsApp Chatbots
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Workflow Engineering
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Lead Gen Workflows
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Customer Acquisition Models
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Custom CRM Systems
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="lg"
            className="group border-primary/50 text-primary hover:bg-gradient-primary hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
          >
            <ArrowUp className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
            Back to Top
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center">
              © {currentYear} Neuraflow.ai. Made with
              <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
              and lots of coffee.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-border">•</span>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-border">•</span>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;