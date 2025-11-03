import { cn } from "@/lib/utils";
import { Award, Building2, Users, Coffee, TrendingUp, Sparkles, Sprout, Code, Car, Home } from "lucide-react";

type Partner = {
  name: string;
  displayName: string;
  industry?: string;
  icon?: React.ReactNode;
  href?: string;
};

// Icon component mapping
const getIndustryIcon = (industry: string) => {
  const iconClass = "w-4 h-4 text-primary";
  switch (industry) {
    case "Real Estate":
      return <Home className={iconClass} />;
    case "Community":
      return <Users className={iconClass} />;
    case "Hospitality":
      return <Coffee className={iconClass} />;
    case "Trading":
      return <TrendingUp className={iconClass} />;
    case "Services":
      return <Sparkles className={iconClass} />;
    case "Agriculture":
      return <Sprout className={iconClass} />;
    case "Technology":
      return <Code className={iconClass} />;
    case "Automotive":
      return <Car className={iconClass} />;
    default:
      return <Building2 className={iconClass} />;
  }
};

const partners: Partner[] = [
  { name: "optiven", displayName: "Optiven Agency", industry: "Real Estate" },
  { name: "solomom", displayName: "SoloMom", industry: "Community" },
  { name: "menengai", displayName: "Menengai Canopy", industry: "Hospitality" },
  { name: "pipnation", displayName: "Pip Nation", industry: "Trading" },
  { name: "safisha", displayName: "Safisha Hub", industry: "Services" },
  { name: "nestic", displayName: "Nestic Agriventures", industry: "Agriculture" },
  { name: "binary", displayName: "Binary Codify", industry: "Technology" },
  { name: "kenjap", displayName: "Kenjap Motors", industry: "Automotive" },
];

const Partners = () => {
  return (
    <section id="partners" className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted Partners</span>
          </div>

          <h2 className="text-heading font-bold text-foreground mb-6">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">leading teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're proud to work with innovative companies across various industries,
            delivering exceptional results and building lasting partnerships.
          </p>
        </div>

        {/* Partners Grid - Typography Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={cn(
                "group relative rounded-xl overflow-hidden",
                "bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm",
                "border border-border/50",
                "p-6 transition-all duration-300 ease-out",
                "hover:scale-105 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
                "animate-fade-in"
              )}
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Industry icon */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  {partner.industry ? getIndustryIcon(partner.industry) : <Building2 className="w-4 h-4 text-primary" />}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
              </div>

              {/* Company Name */}
              <h3 className="text-lg font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                {partner.displayName}
              </h3>

              {/* Industry Tag */}
              {partner.industry && (
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {partner.industry}
                </p>
              )}

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;


