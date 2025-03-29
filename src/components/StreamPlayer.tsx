
import React, { useState, useEffect } from 'react';
import { Play, Volume2, User, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

const StreamPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsPlaying(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <Card className="bg-black/50 border-0 rounded-md overflow-hidden">
        <CardContent className="p-0 relative">
          {isLoading ? (
            <div className="aspect-video w-full flex items-center justify-center bg-muted">
              <div className="flex flex-col items-center">
                <Skeleton className="h-12 w-12 rounded-full bg-stream-accent/30" />
                <span className="mt-2 text-muted-foreground">Loading stream...</span>
              </div>
            </div>
          ) : (
            <div className="relative">
              {/* Placeholder for actual video player - in a real app this would be a video element */}
              <div className={`aspect-video w-full bg-gradient-to-br from-muted to-black flex items-center justify-center`}>
                {!isPlaying && (
                  <Button 
                    onClick={() => setIsPlaying(true)}
                    size="lg" 
                    className="rounded-full w-16 h-16 bg-stream-accent hover:bg-stream-accent/90"
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                )}
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
                      alt="Live stream content" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Control bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                    {isPlaying ? (
                      <div className="flex space-x-1">
                        <div className="w-1 h-3 bg-white animate-pulse"></div>
                        <div className="w-1 h-3 bg-white animate-pulse delay-100"></div>
                        <div className="w-1 h-3 bg-white animate-pulse delay-200"></div>
                      </div>
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-stream-secondary" />
                  <span className="text-sm text-white">2.4k watching</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-3 flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold">🔴 Live: Playing Random Games with Friends</h1>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-stream-accent flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">StreamerPro</span>
            </div>
            <span className="text-muted-foreground">• Gaming</span>
          </div>
        </div>
        <Button className="bg-stream-accent hover:bg-stream-accent/90">Follow</Button>
      </div>
    </div>
  );
};

export default StreamPlayer;
