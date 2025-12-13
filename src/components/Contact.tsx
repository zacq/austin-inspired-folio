import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "info@neuraflow.ai",
      link: "mailto:info@neuraflow.ai",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+254 728 740 205",
      link: "tel:+254728740205",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Nairobi, Kenya",
      link: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </div>

          <h2 className="text-heading font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI automation? Let's discuss your next project and create
            something amazing together. We're always excited to work on new challenges.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="group p-8 border-border/50 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                if (method.link !== "#") {
                  window.location.href = method.link;
                }
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground font-medium">{method.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center animate-scale-in">
          <Card className="p-8 md:p-12 border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Schedule a free consultation to discover how AI automation can transform your workflows,
              increase efficiency, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-hover transition-all duration-300 px-8"
                onClick={() => window.location.href = 'mailto:info@neuraflow.ai'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8"
                onClick={() => window.open('https://wa.me/254728740205?text=Hello!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </Card>
        </div>

        {/* Info Text */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm text-muted-foreground">
            💡 <span className="font-medium">Tip:</span> Prefer a quick chat? Click the WhatsApp button in the bottom-left corner!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;