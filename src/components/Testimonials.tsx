import { Quote } from "lucide-react";
import YouTubePlayer from "./YouTubePlayer";

const Testimonials = () => {
  // Placeholder testimonials - Replace videoId with actual YouTube video IDs
  const testimonials = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO & Founder @ TechStart Inc",
      videoId: "dQw4w9WgXcQ", // Placeholder - Replace with actual video ID
      title: "Sarah Johnson - CEO & Founder @ TechStart Inc | Client Testimonial"
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "CTO @ Innovation Labs",
      videoId: "dQw4w9WgXcQ", // Placeholder - Replace with actual video ID
      title: "Michael Chen - CTO @ Innovation Labs | Client Testimonial"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Client Success Stories</span>
          </div>
          
          <h2 className="text-heading font-bold text-foreground mb-6">
            What clients say <span className="bg-gradient-primary bg-clip-text text-transparent">about our work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear directly from our clients about their experience 
            working with us and the results we've delivered together.
          </p>
        </div>

        {/* Video Grid - Always 2 columns on desktop */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <YouTubePlayer
                videoId={testimonial.videoId}
                title={testimonial.title}
                name={testimonial.name}
                role={testimonial.role}
              />
            </div>
          ))}
        </div>

        {/* Optional: Add more testimonials button */}
        {/* <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            View More Testimonials
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;

