import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "A.I Personal Assistant",
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
      title: "Customer Acquisition System",
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
      title: "Youtube Link to Landing Page System",
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
      title: "Business Intelligence Dashboard",
      description: "A custom AI-driven analytics dashboard built for Re-Home, a sustainability-focused real estate company in Nakuru, Kenya. The system tracks furniture collection, refurbishment, sales, and environmental impact — helping Re-Home scale its mission of reuse and recycling.",
      longDescription: "Re-Home collects, refurbishes, and resells used furniture and home items across Nakuru, promoting sustainable living and circular economy practices. We developed an AI-Powered Dashboard that centralizes real-time data from collection points, workshops, and sales outlets. The dashboard provides live insights into donation trends, refurbishment output, and sales performance. An AI insights engine (LangChain + OpenAI) lets managers ask natural-language questions like: 'Which areas donate the most items?' or 'Which products sell fastest?' This system turns Re-Home's data into actionable sustainability and business intelligence, improving efficiency and transparency.",
      technologies: ["React", "Next.js", "Node.js", "Supabase", "PostgreSQL", "LangChain", "OpenAI", "TensorFlow", "n8n"],
      image: "/projects/rehome dahsboard thumbnail.jpg",
      images: [
        "/projects/rehome dahsboard thumbnail.jpg",
        "/projects/rehome curousel 1.jpg",
        "/projects/Rehome Curousel 2.jpg",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "live" as const,
      role: "Lead Engineer",
      duration: "3 Weeks",
      team: "Team of 2",
      features: [
        "Real-time tracking of collection, refurbishment, and sales data",
        "AI-generated insights on demand patterns and inventory flow",
        "Sustainability dashboard with CO₂-savings metrics",
        "Automated reporting for donations and refurbishing trends",
        "Map-based analytics for pickup and resale zones",
        "Mobile-friendly design for field and office teams"
      ],
      results: [
        "Reduced manual data entry and reporting time by 75%",
        "Quantified environmental savings from reuse and recycling",
        "Improved inventory turnover efficiency by 42%",
        "Enabled real-time visibility into 5+ collection and sales outlets"
      ]
    },
    {
      title: "Faceless Content Engine",
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
      title: "Custom CRM Solutions",
      description: "A scalable, all-in-one CRM and business management system designed to replace multiple SaaS subscriptions. Features client tracking, task automation, analytics dashboards, and a fully AI-ready architecture for future automation and chatbot integration.",
      longDescription: "This platform was built for agencies and service businesses looking to consolidate operations, reduce software costs, and scale with AI. Instead of relying on multiple disconnected tools like Trello, HubSpot, and Google Sheets, the system centralizes all workflows into a unified CRM environment — complete with custom dashboards, lead tracking, proposal generation, and invoicing modules. It integrates AI-ready data infrastructure (vector database + automation endpoints) for future features like intelligent assistants, auto-reporting, and personalized client interactions. Designed for performance and ownership — no subscriptions, no user caps, and total data control.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Supabase", "PostgreSQL", "n8n", "LangChain", "OpenAI", "AWS S3"],
      image: "/projects/CRM Thumbnail.jpg",
      images: [
        "/projects/CRM Thumbnail.jpg",
        "/projects/CRM Carousel 1.jpg",
        "/projects/CRM Carousel 2.jpg",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "live" as const,
      role: "Lead Full-Stack Engineer",
      duration: "2 Weeks",
      team: "Team of 2",
      features: [
        "Unified CRM dashboard with custom pipeline views",
        "Built-in lead management, invoicing, and task tracking",
        "AI-ready data architecture using vector database integration",
        "Real-time analytics and performance visualization",
        "Role-based access for teams and clients",
        "100% ownership — no SaaS lock-in or per-seat costs"
      ],
      results: [
        "Reduced software subscription costs by 70%",
        "Centralized operations from 5+ tools into one platform",
        "Delivered a fully functional CRM in under 2 weeks",
        "Future-proofed architecture for AI agent integration"
      ]
    }
  ];

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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world AI automation solutions that drive measurable business results.
            Each project showcases how intelligent systems can transform operations, boost revenue, and scale growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
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