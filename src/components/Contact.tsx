import { Card } from "@/components/ui/card";
import { MessageCircle, Sparkles, Zap, Clock } from "lucide-react";
import ChatInterface from "./ChatInterface";

const Contact = () => {
  // N8n webhook URL for chat interface
  const N8N_WEBHOOK_URL = "https://primary-production-cd196.up.railway.app/webhook-test/eb5f8df0-c0b2-4598-9bf1-4a1dd2d94802";

  const features = [
    {
      icon: MessageCircle,
      title: "Instant Responses",
      description: "Get answers to your questions in real-time",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Intelligent assistance powered by advanced AI",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Always here when you need support",
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
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </div>

          <h2 className="text-heading font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create
            something amazing together. I'm always excited to work on new challenges.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-6 border-border/50 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto animate-scale-in">
          <ChatInterface webhookUrl={N8N_WEBHOOK_URL} />
        </div>

        {/* Info Text */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm text-muted-foreground">
            💡 <span className="font-medium">Tip:</span> Ask me anything about our services, pricing, or how we can help your business!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;