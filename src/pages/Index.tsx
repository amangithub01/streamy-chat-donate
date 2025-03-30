
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/context/AuthContext';
import { Separator } from '@/components/ui/separator';
import FilterSidebar from '@/components/FilterSidebar';
import BookList from '@/components/BookList';
import { useToast } from "@/hooks/use-toast";
import type { Book } from '@/types/book';
import { BookOpen, DollarSign, BookMarked, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const { toast } = useToast();
  const [books, setBooks] = useState<Book[]>([]);
  
  // Mock data loading would happen here in a real app
  
  const handleAddToCart = (id: string) => {
    toast({
      title: "Added to cart",
      description: "This book has been added to your cart.",
    });
  };
  
  return (
    <AuthProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        
        <div className="w-full bg-gradient-to-r from-stream-accent/80 to-stream-secondary/80 py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome to BookTrade Academia
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              The largest marketplace for buying and selling used academic textbooks.
              Save up to 70% compared to campus bookstore prices!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-stream-accent hover:bg-white/90">
                Browse Books
              </Button>
              <Link to="/stream">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 gap-2">
                  <Video size={18} />
                  Join Live Stream
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 flex flex-col items-center text-center hover:border-stream-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-stream-accent/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-stream-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Textbooks</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Find textbooks for all your courses at unbeatable prices.
              </p>
              <Button variant="link" size="sm" className="mt-auto">
                Browse Textbooks
              </Button>
            </div>
            
            <div className="bg-card border rounded-lg p-6 flex flex-col items-center text-center hover:border-stream-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-stream-accent/10 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-stream-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Sell Your Books</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Turn your used textbooks into cash quickly and easily.
              </p>
              <Button variant="link" size="sm" className="mt-auto">
                Start Selling
              </Button>
            </div>
            
            <div className="bg-card border rounded-lg p-6 flex flex-col items-center text-center hover:border-stream-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-stream-accent/10 flex items-center justify-center mb-4">
                <BookMarked className="h-6 w-6 text-stream-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Course Packs</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get all the books you need for your semester in one bundle.
              </p>
              <Button variant="link" size="sm" className="mt-auto">
                View Bundles
              </Button>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 py-6 mb-20">
          <h2 className="text-2xl font-bold mb-6">Books Marketplace</h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-64 flex-shrink-0">
              <FilterSidebar />
            </div>
            <div className="flex-1">
              <BookList 
                books={books} 
                onAddToCart={handleAddToCart}
                isLoading={false}
                isError={false}
              />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <footer className="bg-muted/30 py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">About BookTrade</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Our Story</li>
                  <li>How it Works</li>
                  <li>Testimonials</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Help Center</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>FAQ</li>
                  <li>Contact Us</li>
                  <li>Return Policy</li>
                  <li>Shipping Information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">For Students</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Student Discount</li>
                  <li>Campus Representatives</li>
                  <li>Bulk Orders</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Subscribe to our newsletter for the latest deals and updates.
                </p>
                <div className="mt-2 flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-background text-sm px-3 py-2 rounded-l-md border border-r-0 border-muted focus:outline-none focus:border-stream-accent flex-1"
                  />
                  <Button size="sm" className="rounded-l-none bg-stream-accent hover:bg-stream-accent/90">Subscribe</Button>
                </div>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>© 2023 BookTrade Academia. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
};

export default Index;
