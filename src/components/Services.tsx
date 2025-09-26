import { Card } from "@/components/ui/card";
import { Bot, Zap, Target, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent chatbots and automated workflows to streamline your business operations",
      features: ["Custom AI Solutions", "Workflow Automation", "Smart Integrations"]
    },
    {
      icon: Zap,
      title: "Lead Generation",
      description: "Automated lead capture and nurturing systems that convert prospects into customers",
      features: ["Lead Scoring", "Email Automation", "CRM Integration"]
    },
    {
      icon: Target,
      title: "Marketing Automation",
      description: "Personalized marketing campaigns that engage your audience at the right time",
      features: ["Campaign Management", "A/B Testing", "Performance Tracking"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven insights and reporting to optimize your business performance",
      features: ["Real-time Dashboards", "Custom Reports", "Predictive Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-bold text-foreground mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge automation solutions. We help companies 
            streamline operations, generate more leads, and scale efficiently with AI-powered tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-primary">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-muted-foreground bg-secondary/50 rounded-full px-3 py-1">
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <Card className="p-8 max-w-4xl mx-auto shadow-card border-0">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Why Choose ActionPulse?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We combine cutting-edge AI technology with proven business strategies to deliver automation 
              solutions that actually work. Our team has helped over 50+ businesses reduce costs, 
              increase efficiency, and scale their operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From small startups to enterprise companies, we tailor our automation solutions to fit 
              your specific needs and business goals. Ready to transform your business with intelligent automation?
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;