import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface YouTubePlayerProps {
  videoId: string;
  title: string;
  name: string;
  role: string;
}

const YouTubePlayer = ({ videoId, title, name, role }: YouTubePlayerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // YouTube embed URL with privacy-enhanced mode and parameters
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1`;

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
      
      <div className="relative">
        {/* Video Container with 16:9 aspect ratio */}
        <div className="relative w-full overflow-hidden rounded-t-lg bg-black" style={{ paddingBottom: '56.25%' }}>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/50">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-sm text-muted-foreground">Loading video...</p>
              </div>
            </div>
          )}
          
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        </div>

        {/* Testimonial Info */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>

        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Card>
  );
};

export default YouTubePlayer;

