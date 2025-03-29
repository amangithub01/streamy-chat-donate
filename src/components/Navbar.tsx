
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Video, Users, Heart } from 'lucide-react';

const Navbar = () => {
  const { user, openAuthModal } = useAuth();

  return (
    <nav className="bg-stream-dark border-b border-muted px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Video className="h-6 w-6 text-stream-accent" />
          <span className="text-xl font-bold bg-gradient-to-r from-stream-accent to-stream-secondary bg-clip-text text-transparent">
            StreamyFy
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <Video size={18} />
            <span>Browse</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <Users size={18} />
            <span>Following</span>
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground hidden md:inline-block">
                Welcome, {user.username}
              </span>
              <Button size="sm" variant="outline" className="border-stream-accent text-stream-accent hover:bg-stream-accent/20">
                <Heart size={16} className="mr-1" /> Subscribe
              </Button>
            </div>
          ) : (
            <Button 
              onClick={openAuthModal}
              className="bg-gradient-to-r from-stream-accent to-stream-secondary hover:opacity-90 transition-opacity"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
