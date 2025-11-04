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
      title: "AI-Powered Chatbot & Voice Solution",
      description: "Deployed an intelligent WhatsApp + Voice AI system that automated lead capture, qualification, and follow-up — reducing response time by 73% and increasing conversion rates by 31% within the first month.",
      longDescription: "Developed a scalable, AI-driven communication platform combining WhatsApp chatbots and voice automation to handle inbound and outbound interactions autonomously. The system integrates with CRM and calendar tools to instantly respond to inquiries, qualify leads, and trigger outbound voice calls for missed opportunities. Using n8n, Meta API, and VAPI, the workflow achieves full-cycle automation — from chat to call — while logging every conversation for analytics. The implementation helped clients see: 60% fewer missed leads through real-time routing, 2.5× faster response cycles for new inbound messages, and 25% uplift in appointment bookings within 30 days of deployment.",
      technologies: ["n8n", "Meta API", "VAPI", "Node.js", "Webhooks"],
      image: "/projects/ai-chatbot-thumbnail.jpg",
      images: [
        "/projects/ai-chatbot-thumbnail.jpg",
        "/projects/ai-chatbot-architecture.jpg",
        "/projects/ai-chatbot-architecture 2.jpg",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "live" as const,
      role: "Lead Engineer",
      duration: "2 Weeks",
      team: "Team of 2",
      features: [
        "AI-driven WhatsApp chat automation",
        "Instant outbound voice call triggers for lead follow-up",
        "Smart scheduling and CRM synchronization",
        "Analytics dashboard tracking conversation insights",
        "Mobile-first, responsive experience",
        "Multi-channel automation (Chat + Voice + Email)"
      ],
      results: [
        "73% reduction in average lead response time",
        "31% increase in conversion rate from chat to sale",
        "60% decrease in manual workload for support teams",
        "25% boost in booked appointments",
        "Full ROI achieved within 4 weeks of go-live"
      ]
    },
    {
      title: "Lead Generation & Research Agent",
      description: "Deployed and automated lead generation and research system built with n8n, Apollo, Apify, Relevance AI, and Perplexity. Streamlines prospect sourcing, enrichment, and reporting — cutting manual research time by over 90%.",
      longDescription: "An intelligent workflow that automates the end-to-end lead generation and research process. The system sources leads from Apollo, enriches data via Relevance AI and Apify, gathers company insights using Perplexity, and compiles structured research reports automatically. Designed for marketing and sales teams, it eliminates repetitive prospecting tasks, ensures up-to-date intelligence, and produces actionable insights for smarter outreach.",
      technologies: ["n8n", "Apollo", "Apify", "Relevance AI", "Perplexity", "Google Sheets"],
      image: "/projects/lead-gen-thumbnail.jpg",
      images: [
        "/projects/lead-gen-thumbnail.jpg",
        "/projects/lead-gen-carousel.jpg",
        "/projects/lead-gen-carousel2.jpg",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "live" as const,
      role: "Lead Engineer",
      duration: "3 weeks",
      team: "Solo Project",
      features: [
        "Automated lead sourcing and enrichment",
        "Real-time LinkedIn and company data extraction",
        "AI-generated personalized research reports",
        "Seamless integration with Google Sheets and Gmail",
        "Custom triggers for batch or single-lead research",
        "White-label HTML report generation"
      ],
      results: [
        "90% reduction in manual lead research time",
        "3x faster lead list creation and enrichment cycles",
        "Instant, personalized research reports delivered via email",
        "Centralized data flow between n8n, Sheets, and your CRM"
      ]
    },
    {
      title: "AI-Driven YouTube Lead Generation System",
      description: "Automated system that converts any YouTube video into a dynamic lead generation funnel — complete with landing page creation, transcript analysis, and multi-platform social content distribution.",
      longDescription: "An intelligent, end-to-end lead generation system built to help creators and marketers transform video content into automated marketing assets. The workflow begins when a user submits a YouTube link; the system extracts metadata and transcripts through the YouTube Data API, stores structured data in Airtable, and uses ChatGPT/Claude to generate optimized landing page copy and social media captions. A Next.js web app dynamically generates landing pages based on Airtable records, integrating email capture and real-time content updates. The process is orchestrated entirely in n8n, ensuring scalable, no-code automation from video submission to deployment.",
      technologies: ["n8n", "YouTube Data API", "ChatGPT/Claude", "Airtable", "Next.js", "Cloud Code"],
      image: "/projects/youtube-leadgen thumbnail.jpg",
      images: [
        "/projects/youtube-leadgen thumbnail.jpg",
        "/projects/Youtube Curousel.jpg",
        "/projects/Youtube Curousel 2.jpg",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "live" as const,
      role: "Lead Workflow Engineer",
      duration: "2 Weeks",
      team: "Solo Build",
      features: [
        "Automatic video transcript extraction",
        "AI-generated landing pages from video content",
        "Auto-posting to LinkedIn, Facebook, and X (formerly Twitter)",
        "Centralized Airtable database for content & metadata",
        "Dynamic, responsive landing page with lead capture",
        "Fully automated deployment pipeline via n8n"
      ],
      results: [
        "Reduced manual content creation time by 80%",
        "Generated landing pages for 20+ videos in under 5 minutes each",
        "Increased lead capture conversion by 35% using AI-optimized copy",
        "Enabled one-click distribution across 3 major social platforms"
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
      title: "AI-Powered Viral Faceless Video Automation System",
      description: "Fully automated AI system that creates and posts viral-style faceless videos daily across social media — handling topic research, scriptwriting, voiceovers, editing, and publishing without human input.",
      longDescription: "An intelligent, end-to-end video automation platform designed for content creators and marketing teams who want consistent short-form output at scale. The system sources trending topics using Brutalist API, refines them through LLM scoring, and generates viral-style scripts optimized for engagement. It then uses Replicate for faceless AI visuals, Fish Audio for natural-sounding voiceovers, and Shotstack to assemble and render videos in vertical format. All workflows run through n8n, with automated posting to YouTube Shorts, TikTok, Instagram, Facebook, and LinkedIn, creating a completely hands-off content engine that maintains high quality and consistency.",
      technologies: ["n8n", "Replicate API", "Fish Audio", "Shotstack", "Brutalist API", "Tavily API", "Google Drive", "Blotato API"],
      image: "/projects/Viral Video thumbnail.jpg",
      images: [
        "/projects/Viral Video thumbnail.jpg",
        "/projects/Viral Video Carousel 1.jpg",
        "/projects/viral Video Carousel 2.jpg",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "live" as const,
      role: "Automation Architect",
      duration: "3 Weeks",
      team: "Solo Build",
      features: [
        "Daily automated faceless video generation",
        "LLM-based topic ranking and scriptwriting",
        "AI-rendered visuals and auto voiceovers",
        "Auto-captioning optimized for mobile reels",
        "Seamless cross-platform posting to 5+ channels",
        "Zero manual editing or intervention required"
      ],
      results: [
        "Reduced manual support time by 65%",
        "Improved lead response rate by 40%",
        "Automated over 200 customer calls per week",
        "Achieved under 5-second average reply time on WhatsApp"
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