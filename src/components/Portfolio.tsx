import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution built with React, Node.js, and Stripe integration. Features real-time inventory, advanced search, and mobile-first design.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      technologies: ["TypeScript", "React", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Health & Fitness Tracker",
      description: "Mobile-first wellness application with workout tracking, nutrition monitoring, and social features for fitness enthusiasts.",
      technologies: ["React Native", "Firebase", "Chart.js", "Express"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence platform featuring machine learning insights, real-time data visualization, and predictive analytics.",
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Scheduler",
      description: "Multi-platform social media management tool with content scheduling, analytics, and team collaboration features.",
      technologies: ["Next.js", "Prisma", "Redis", "AWS"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Comprehensive property marketplace with advanced search filters, virtual tours, and integrated mortgage calculator.",
      technologies: ["Vue.js", "Django", "PostGIS", "Docker"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of some of my recent work spanning various industries and technologies. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-hover transition-all duration-500 hover:-translate-y-2 animate-scale-in border-0 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs border-white text-white hover:bg-white hover:text-black">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gradient-subtle text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;