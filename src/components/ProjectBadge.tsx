import { cn } from "@/lib/utils";

type ProjectStatus = "live" | "in-progress" | "completed" | "archived";

interface ProjectBadgeProps {
  status: ProjectStatus;
  className?: string;
}

const ProjectBadge = ({ status, className }: ProjectBadgeProps) => {
  const statusConfig = {
    live: {
      label: "Live",
      className: "bg-green-500/20 text-green-400 border-green-500/50",
      dotClassName: "bg-green-400",
    },
    "in-progress": {
      label: "In Progress",
      className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
      dotClassName: "bg-yellow-400",
    },
    completed: {
      label: "Completed",
      className: "bg-blue-500/20 text-blue-400 border-blue-500/50",
      dotClassName: "bg-blue-400",
    },
    archived: {
      label: "Archived",
      className: "bg-gray-500/20 text-gray-400 border-gray-500/50",
      dotClassName: "bg-gray-400",
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium backdrop-blur-sm",
        config.className,
        className
      )}
    >
      <span className={cn("w-2 h-2 rounded-full animate-pulse", config.dotClassName)} />
      {config.label}
    </div>
  );
};

export default ProjectBadge;

