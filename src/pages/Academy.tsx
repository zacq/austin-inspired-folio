import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { 
  Zap, 
  Webhook, 
  Plug, 
  Database, 
  Brain, 
  MessageSquare, 
  Code, 
  Bot, 
  Users, 
  FileText,
  Target,
  ArrowRight,
  Sparkles,
  GraduationCap
} from "lucide-react";

const Academy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseLayers = [
    {
      layer: "Layer 1: Foundations",
      subtitle: "System Building Blocks",
      icon: Sparkles,
      gradient: "from-blue-500 to-cyan-500",
      courses: [
        {
          id: 1,
          title: "Triggers & Events",
          slug: "/courses/triggers-events",
          icon: Zap,
          description: "Understand how actions, schedules, and signals initiate automation across systems.",
          color: "text-blue-500"
        },
        {
          id: 2,
          title: "Webhooks",
          slug: "/courses/webhooks",
          icon: Webhook,
          description: "Learn how real-time events move data between systems using webhook-based communication.",
          color: "text-cyan-500"
        },
        {
          id: 3,
          title: "APIs & Integrations",
          slug: "/courses/apis-integrations",
          icon: Plug,
          description: "Connect platforms, authenticate requests, and orchestrate multi-tool workflows using APIs.",
          color: "text-indigo-500"
        },
        {
          id: 4,
          title: "Databases & Vector Databases",
          slug: "/courses/databases-vector",
          icon: Database,
          description: "Store, retrieve, embed, and search data for intelligent automation and AI memory.",
          color: "text-purple-500"
        }
      ]
    },
    {
      layer: "Layer 2: Intelligence",
      subtitle: "AI Capabilities",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      courses: [
        {
          id: 5,
          title: "Large Language Models (LLMs)",
          slug: "/courses/llms",
          icon: Brain,
          description: "Control and deploy LLMs as reasoning engines inside automated systems.",
          color: "text-purple-500"
        },
        {
          id: 6,
          title: "Prompt Engineering",
          slug: "/courses/prompt-engineering",
          icon: MessageSquare,
          description: "Design structured prompts that make AI outputs predictable and production-ready.",
          color: "text-pink-500"
        },
        {
          id: 7,
          title: "AI Vibe Coding",
          slug: "/courses/ai-vibe-coding",
          icon: Code,
          description: "Build functional apps and automations using AI-assisted development workflows.",
          color: "text-fuchsia-500"
        }
      ]
    },
    {
      layer: "Layer 3: Application",
      subtitle: "User-Facing Systems",
      icon: Bot,
      gradient: "from-orange-500 to-red-500",
      courses: [
        {
          id: 8,
          title: "AI Chatbots & Voice Agents",
          slug: "/courses/chatbots-agents",
          icon: Bot,
          description: "Deploy inbound and outbound chat and voice agents that interact with users and trigger workflows.",
          color: "text-orange-500"
        },
        {
          id: 9,
          title: "CRM Systems & Automations",
          slug: "/courses/crm-systems",
          icon: Users,
          description: "Build intelligent CRM pipelines that automate lead management, follow-ups, and reporting.",
          color: "text-red-500"
        },
        {
          id: 10,
          title: "AI Content Generation",
          slug: "/courses/content-generation",
          icon: FileText,
          description: "Automate marketing, sales, and support content as part of end-to-end processes.",
          color: "text-rose-500"
        }
      ]
    }
  ];

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full">
        <SidebarInset className="flex-1">
          <div className="min-h-screen bg-background">
            <Navigation />
            
            <main className="pt-20">
              {/* Hero Section */}
              <section className="relative py-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                  <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">NeuraFlow Academy</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                      From AI Components to <br />
                      <span className="bg-gradient-primary bg-clip-text text-transparent">
                        Fully Automated Businesses
                      </span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                      Master workflows, APIs, LLMs, databases, and AI agents—then bundle them into
                      complete business process automation systems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button
                        size="lg"
                        className="bg-gradient-primary hover:shadow-hover transition-all duration-300 px-8"
                        onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Explore Courses
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8"
                        onClick={() => document.getElementById('capstone')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        View Automation Path
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Course Layers */}
              <section id="courses" className="py-20 bg-gradient-subtle">
                <div className="max-w-7xl mx-auto px-6">
                  {courseLayers.map((layer, layerIndex) => {
                    const LayerIcon = layer.icon;
                    return (
                      <div key={layerIndex} className="mb-20 last:mb-0">
                        {/* Layer Header */}
                        <div className="text-center mb-12 animate-fade-in">
                          <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${layer.gradient} bg-clip-text text-transparent mb-4`}>
                            <LayerIcon className="w-8 h-8" style={{ color: 'inherit' }} />
                            <h2 className="text-3xl font-bold">{layer.layer}</h2>
                          </div>
                          <p className="text-lg text-muted-foreground">{layer.subtitle}</p>
                        </div>

                        {/* Course Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {layer.courses.map((course, courseIndex) => {
                            const CourseIcon = course.icon;
                            return (
                              <Card
                                key={course.id}
                                className="group relative p-6 overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover:scale-105 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 cursor-pointer animate-scale-in"
                                style={{ animationDelay: `${courseIndex * 0.1}s` }}
                                onClick={() => {
                                  // TODO: Navigate to course detail page
                                  console.log('Navigate to:', course.slug);
                                }}
                              >
                                {/* Gradient accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${layer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Icon */}
                                <div className="mb-4">
                                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${layer.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <CourseIcon className="w-6 h-6 text-white" />
                                  </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                  {course.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                  {course.description}
                                </p>

                                {/* Learn More */}
                                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                                  <span>Learn More</span>
                                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Capstone Section */}
              <section id="capstone" className="py-20 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                  <div className="text-center mb-12 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-gradient-primary bg-clip-text text-transparent mb-4">
                      <Target className="w-10 h-10" />
                      <h2 className="text-4xl font-bold">Final Layer: Capstone</h2>
                    </div>
                  </div>

                  <Card className="relative p-8 md:p-12 overflow-hidden bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm border-2 border-primary/50 hover:border-primary transition-all duration-500 animate-scale-in">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent opacity-50" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/50">
                          <Target className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
                        Business Process Automation
                      </h3>

                      {/* Description */}
                      <p className="text-lg text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                        Combine workflows, APIs, databases, LLMs, chatbots, CRMs, and content generation
                        into fully automated business processes.
                      </p>

                      {/* Outcomes Grid */}
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {[
                          "Lead-to-sale automation",
                          "Customer support automation",
                          "Operations & internal workflow automation",
                          "AI-powered decision systems",
                          "Revenue and cost-optimization pipelines"
                        ].map((outcome, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                            <span className="text-foreground font-medium">{outcome}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex justify-center">
                        <Button
                          size="lg"
                          className="bg-gradient-primary hover:shadow-hover transition-all duration-300 px-8"
                          onClick={() => {
                            // TODO: Navigate to capstone course
                            console.log('Navigate to: /courses/business-process-automation');
                          }}
                        >
                          Start Capstone Course
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>
            </main>

            <Footer />
          </div>
        </SidebarInset>

        <FloatingWhatsAppButton />
      </div>
    </SidebarProvider>
  );
};

export default Academy;

