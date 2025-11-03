import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import TechnologyFilter from "./TechnologyFilter";

const Portfolio = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution built with React, Node.js, and Stripe integration. Features real-time inventory, advanced search, and mobile-first design.",
      longDescription: "A comprehensive e-commerce platform designed for modern retail businesses. Built with scalability and user experience in mind, featuring real-time inventory management, advanced product search with filters, secure payment processing through Stripe, and a fully responsive mobile-first design.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop&crop=center",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "live" as const,
      role: "Full Stack Developer",
      duration: "6 months",
      team: "Team of 4",
      features: [
        "Real-time inventory tracking",
        "Advanced product search and filtering",
        "Secure payment processing with Stripe",
        "Admin dashboard with analytics",
        "Mobile-responsive design",
        "Shopping cart and wishlist functionality"
      ]
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      longDescription: "A powerful task management application designed for teams. Features real-time collaboration, advanced analytics, customizable workflows, and seamless integration with popular productivity tools.",
      technologies: ["TypeScript", "React", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "in-progress" as const,
      role: "Lead Developer",
      duration: "4 months",
      team: "Solo Project",
      features: [
        "Real-time collaboration with Socket.io",
        "Drag-and-drop task management",
        "Team analytics dashboard",
        "Custom workflow creation",
        "File attachments and comments",
        "Email notifications"
      ]
    },
    {
      title: "Health & Fitness Tracker",
      description: "Mobile-first wellness application with workout tracking, nutrition monitoring, and social features for fitness enthusiasts.",
      longDescription: "A comprehensive health and fitness tracking application for mobile devices. Track workouts, monitor nutrition, connect with friends, and achieve your fitness goals with data-driven insights.",
      technologies: ["React Native", "Firebase", "Chart.js", "Express"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed" as const,
      role: "Mobile Developer",
      duration: "3 months",
      features: [
        "Workout tracking and planning",
        "Nutrition and calorie monitoring",
        "Social features and challenges",
        "Progress visualization with charts",
        "Integration with wearable devices"
      ]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence platform featuring machine learning insights, real-time data visualization, and predictive analytics.",
      longDescription: "An advanced analytics platform powered by machine learning. Provides businesses with actionable insights, predictive analytics, and beautiful data visualizations to drive informed decision-making.",
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#",
      status: "live" as const,
      role: "Full Stack Developer",
      duration: "8 months",
      team: "Team of 6",
      features: [
        "Machine learning predictions",
        "Real-time data visualization",
        "Custom report generation",
        "Multi-source data integration",
        "Automated insights and alerts"
      ]
    },
    {
      title: "Social Media Scheduler",
      description: "Multi-platform social media management tool with content scheduling, analytics, and team collaboration features.",
      longDescription: "A powerful social media management platform that helps businesses schedule content across multiple platforms, analyze performance, and collaborate with team members efficiently.",
      technologies: ["Next.js", "Prisma", "Redis", "AWS"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#",
      status: "in-progress" as const,
      role: "Backend Developer",
      duration: "5 months",
      features: [
        "Multi-platform scheduling",
        "Content calendar view",
        "Performance analytics",
        "Team collaboration tools",
        "AI-powered content suggestions"
      ]
    },
    {
      title: "Real Estate Platform",
      description: "Comprehensive property marketplace with advanced search filters, virtual tours, and integrated mortgage calculator.",
      longDescription: "A modern real estate platform connecting buyers, sellers, and agents. Features advanced property search, virtual tours, mortgage calculations, and seamless communication tools.",
      technologies: ["Vue.js", "Django", "PostGIS", "Docker"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed" as const,
      role: "Frontend Developer",
      duration: "7 months",
      team: "Team of 5",
      features: [
        "Advanced property search with maps",
        "Virtual tour integration",
        "Mortgage calculator",
        "Agent messaging system",
        "Saved searches and alerts"
      ]
    }
  ];

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (selectedTech === "All") return projects;
    return projects.filter(project =>
      project.technologies.includes(selectedTech)
    );
  }, [selectedTech]);

  // Count projects per technology
  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    allTechnologies.forEach(tech => {
      counts[tech] = projects.filter(p => p.technologies.includes(tech)).length;
    });
    return counts;
  }, [allTechnologies]);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-heading font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning various industries and technologies.
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        {/* Technology Filter */}
        <TechnologyFilter
          technologies={allTechnologies}
          selectedTech={selectedTech}
          onSelectTech={setSelectedTech}
          projectCounts={projectCounts}
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found with the selected technology.
            </p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Portfolio;