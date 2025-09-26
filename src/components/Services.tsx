import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Users, Calendar, CheckCircle } from "lucide-react";

const Services = () => {
  const tasks = [
    {
      icon: Clock,
      title: "Payment reminder",
      subtitle: "sent to selected clients",
      status: "completed",
      color: "text-green-500"
    },
    {
      icon: DollarSign,
      title: "Payroll management",
      subtitle: "Due on 2nd July",
      status: "pending",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Employee Tracking",
      subtitle: "2 days ago",
      status: "completed",
      color: "text-green-500"
    },
    {
      icon: Calendar,
      title: "Social media post",
      subtitle: "Cancelled by user",
      status: "cancelled",
      color: "text-muted-foreground"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-sm text-muted-foreground mb-4">Our Services</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI Solutions That Take Your<br />
            Business to the Next Level
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We design, develop, and implement automation tools that help you work smarter, not harder
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {/* All Tasks Section */}
          <div className="animate-fade-in">
            <Card className="bg-card border border-border p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-sm font-medium text-foreground">All Tasks</div>
                <div className="text-sm text-muted-foreground">Waiting for approval</div>
              </div>
              
              <div className="space-y-4">
                {tasks.map((task, index) => {
                  const IconComponent = task.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className={`p-2 rounded-full bg-secondary ${task.color}`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{task.title}</div>
                        <div className="text-xs text-muted-foreground">{task.subtitle}</div>
                      </div>
                      {task.status === "completed" && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Workflow Automation Section */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6">
              <div className="inline-block bg-secondary rounded-lg px-3 py-1 text-sm text-foreground mb-4">
                Workflow Automation
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Automate repetitive tasks
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We help you streamline internal operations by automating manual workflows like data entry, 
                reporting, and approval chains saving time and cutting down on errors.
              </p>
              
              <div className="flex gap-3">
                <div className="bg-secondary rounded-lg px-3 py-1 text-sm text-foreground">
                  Internal Task Bots
                </div>
                <div className="bg-secondary rounded-lg px-3 py-1 text-sm text-foreground">
                  100+ Automations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;