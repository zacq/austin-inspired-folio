import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      color: "text-blue-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "text-green-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "REST APIs, GraphQL, WebSockets, PWAs",
      color: "text-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-bold text-foreground mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with over 8 years of experience building 
            scalable web applications and digital solutions. I specialize in creating 
            high-performance, user-centric applications using modern technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 rounded-full bg-gradient-subtle ${skill.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <Card className="p-8 max-w-4xl mx-auto shadow-card border-0">
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Started as a curious developer fascinated by the intersection of design and technology. 
              Over the years, I've had the privilege of working with startups and established companies, 
              helping them transform ideas into powerful digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or mentoring aspiring developers. I believe in writing clean, maintainable code 
              and creating solutions that make a real difference.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;