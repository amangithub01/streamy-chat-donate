
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { 
  Book, 
  Search, 
  ShoppingCart, 
  LogIn, 
  User, 
  Menu, 
  X 
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const { user, openAuthModal } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <nav className="bg-black border-b border-[#222222] px-4 py-3 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-stream-accent" />
          <span className="text-xl font-bold bg-gradient-to-r from-stream-accent to-stream-secondary bg-clip-text text-transparent">
            BookTrade Academia
          </span>
        </div>
        
        <div className={`hidden md:flex items-center space-x-6 flex-1 max-w-md mx-6 transition-all duration-200 ${searchFocused ? 'scale-105' : ''}`}>
          <div className="relative w-full group">
            <Search className={`absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-200 ${searchFocused ? 'text-stream-accent' : 'text-muted-foreground'}`} />
            <Input 
              placeholder="Search academic books..." 
              className="pl-8 bg-muted border-none focus:ring-2 focus:ring-stream-accent transition-all duration-200"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            {searchFocused && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg p-2 text-xs text-muted-foreground">
                Try searching by title, author, subject, or ISBN
              </div>
            )}
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
              <span className="hidden sm:inline-block">Sign In</span>
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 py-4 border-t border-[#222222] animate-in slide-in-from-top-5 duration-200">
          <div className="container mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search academic books..." 
                className="pl-8 bg-muted border-none w-full"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" className="justify-start">
                Browse Subjects
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Sell Books
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Help Center
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
