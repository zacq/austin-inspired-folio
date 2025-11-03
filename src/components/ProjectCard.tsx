import { useState, useRef, MouseEvent } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import ProjectBadge from "./ProjectBadge";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    status?: "live" | "in-progress" | "completed" | "archived";
  };
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden transition-all duration-500 border-0 cursor-pointer",
        "bg-card/50 backdrop-blur-sm",
        isHovered && "shadow-2xl shadow-primary/20"
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
          isHovered ? "translateY(-8px) scale(1.02)" : ""
        }`,
        transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Animated gradient border */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500",
          "bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%]",
          isHovered && "opacity-100 animate-gradient-shift"
        )}
        style={{ padding: "2px" }}
      >
        <div className="absolute inset-[2px] bg-card rounded-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Image Section */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-700",
              isHovered && "scale-110 blur-sm"
            )}
          />

          {/* Status Badge */}
          {project.status && (
            <div className="absolute top-4 left-4">
              <ProjectBadge status={project.status} />
            </div>
          )}

          {/* Gradient Overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
              "transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Hover Actions */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center gap-3",
              "transition-all duration-300",
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="bg-white/90 text-black hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, "_blank");
                }}
                className="hover:scale-110 transition-all duration-300"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank");
                }}
                className="border-white text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
              >
                <Github className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Particle effect */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={cn(
                  "px-3 py-1 text-xs font-medium rounded-full",
                  "bg-gradient-subtle text-primary border border-primary/20",
                  "transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

