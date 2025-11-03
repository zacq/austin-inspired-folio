import { useEffect } from "react";
import { X, ExternalLink, Github, Calendar, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ImageCarousel from "./ImageCarousel";
import ProjectBadge from "./ProjectBadge";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    images?: string[];
    liveUrl?: string;
    githubUrl?: string;
    status?: "live" | "in-progress" | "completed" | "archived";
    longDescription?: string;
    features?: string[];
    role?: string;
    duration?: string;
    team?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const images = project.images || [project.image];

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "bg-black/80 backdrop-blur-md",
        "animate-in fade-in duration-300"
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "relative w-full max-w-5xl max-h-[90vh] overflow-y-auto",
          "bg-card border border-border rounded-2xl shadow-2xl",
          "animate-in zoom-in-95 duration-300"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm rounded-full"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {project.title}
                </h2>
                {project.status && <ProjectBadge status={project.status} />}
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              {project.role && (
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>{project.role}</span>
                </div>
              )}
              {project.duration && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{project.duration}</span>
                </div>
              )}
              {project.team && (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{project.team}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.liveUrl && project.liveUrl !== "#" && (
                <Button
                  onClick={() => window.open(project.liveUrl, "_blank")}
                  className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Demo
                </Button>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                  className="hover:bg-secondary transition-all duration-300"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Source Code
                </Button>
              )}
            </div>
          </div>

          {/* Image Carousel */}
          <div className="mb-8">
            <ImageCarousel images={images} alt={project.title} />
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              About This Project
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Key Features
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full",
                    "bg-gradient-subtle text-primary border border-primary/20",
                    "transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

