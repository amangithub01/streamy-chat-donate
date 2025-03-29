
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Book, Search, ShoppingCart, LogIn, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const { user, openAuthModal } = useAuth();

  return (
    <nav className="bg-black border-b border-[#222222] px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-stream-accent" />
          <span className="text-xl font-bold bg-gradient-to-r from-stream-accent to-stream-secondary bg-clip-text text-transparent">
            BookTrade Academia
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search academic books..." 
              className="pl-8 bg-muted border-none"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-stream-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>
          
          {user ? (
            <Button variant="ghost" size="sm" className="gap-2">
              <User size={18} />
              <span className="hidden md:inline-block">{user.username}</span>
            </Button>
          ) : (
            <Button 
              onClick={openAuthModal}
              className="bg-gradient-to-r from-stream-accent to-stream-secondary hover:opacity-90 transition-opacity gap-2"
            >
              <LogIn size={18} />
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
