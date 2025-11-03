import { Card } from "@/components/ui/card";
import { Bot, Zap, Target, BarChart3, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent chatbots and automated workflows to streamline your business operations",
      features: ["Custom AI Solutions", "Workflow Automation", "Smart Integrations"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lead Generation",
      description: "Automated lead capture and nurturing systems that convert prospects into customers",
      features: ["Lead Scoring", "Email Automation", "CRM Integration"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Marketing Automation",
      description: "Personalized marketing campaigns that engage your audience at the right time",
      features: ["Campaign Management", "A/B Testing", "Performance Tracking"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven insights and reporting to optimize your business performance",
      features: ["Real-time Dashboards", "Custom Reports", "Predictive Analytics"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pulsing gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">What We Offer</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Automate intelligently. Grow without limits.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className={cn(
                  "group relative p-6 overflow-hidden",
                  "bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm",
                  "border border-border/50",
                  "transition-all duration-500 ease-out",
                  "hover:scale-105 hover:shadow-2xl hover:border-primary/50",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient accent on hover */}
                <div className={cn(
                  "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  service.gradient
                )} />

                {/* Glow effect on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none",
                  service.gradient
                )} />

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={cn(
                    "relative p-4 rounded-2xl bg-gradient-to-br transition-all duration-300",
                    "group-hover:scale-110 group-hover:rotate-3",
                    service.gradient
                  )}>
                    <IconComponent className="h-8 w-8 text-white relative z-10" />
                    {/* Icon glow */}
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 text-center group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <button className="group/btn flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300 mx-auto">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;