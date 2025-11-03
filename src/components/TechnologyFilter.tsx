import { cn } from "@/lib/utils";

interface TechnologyFilterProps {
  technologies: string[];
  selectedTech: string;
  onSelectTech: (tech: string) => void;
  projectCounts: Record<string, number>;
}

const TechnologyFilter = ({
  technologies,
  selectedTech,
  onSelectTech,
  projectCounts,
}: TechnologyFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button
        onClick={() => onSelectTech("All")}
        className={cn(
          "group relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300",
          "border-2 backdrop-blur-sm",
          selectedTech === "All"
            ? "bg-gradient-primary text-white border-transparent shadow-lg shadow-primary/50 scale-105"
            : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground hover:scale-105"
        )}
      >
        <span className="relative z-10 flex items-center gap-2">
          All Projects
          <span
            className={cn(
              "px-2 py-0.5 rounded-full text-xs font-bold",
              selectedTech === "All"
                ? "bg-white/20 text-white"
                : "bg-primary/20 text-primary"
            )}
          >
            {projectCounts["All"] || 0}
          </span>
        </span>
        {selectedTech === "All" && (
          <span className="absolute inset-0 rounded-full bg-gradient-primary animate-pulse opacity-50" />
        )}
      </button>

      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => onSelectTech(tech)}
          className={cn(
            "group relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300",
            "border-2 backdrop-blur-sm",
            selectedTech === tech
              ? "bg-gradient-primary text-white border-transparent shadow-lg shadow-primary/50 scale-105"
              : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground hover:scale-105"
          )}
        >
          <span className="relative z-10 flex items-center gap-2">
            {tech}
            <span
              className={cn(
                "px-2 py-0.5 rounded-full text-xs font-bold",
                selectedTech === tech
                  ? "bg-white/20 text-white"
                  : "bg-primary/20 text-primary"
              )}
            >
              {projectCounts[tech] || 0}
            </span>
          </span>
          {selectedTech === tech && (
            <span className="absolute inset-0 rounded-full bg-gradient-primary animate-pulse opacity-50" />
          )}
        </button>
      ))}
    </div>
  );
};

export default TechnologyFilter;

