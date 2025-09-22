import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Full-Stack Developer passionate about creating exceptional digital experiences 
              and scalable solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-background/60 hover:text-background transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-background transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:john.doe@example.com" 
                className="text-background/60 hover:text-background transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors duration-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/80 hover:text-background transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors duration-300">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-background/80">Web Development</span>
              </li>
              <li>
                <span className="text-background/80">Mobile Applications</span>
              </li>
              <li>
                <span className="text-background/80">API Development</span>
              </li>
              <li>
                <span className="text-background/80">Technical Consulting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center">
            © {currentYear} John Doe. Made with 
            <Heart className="h-4 w-4 mx-2 text-red-500" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;