
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/context/AuthContext';
import { books, subjects, conditions } from '@/data/books';
import FilterSidebar from '@/components/FilterSidebar';
import BookList from '@/components/BookList';
import { useToast } from "@/hooks/use-toast";
import type { Book } from '@/types/book';
import { BookOpen, DollarSign, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { toast } = useToast();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);
  
  const filteredBooks = books.filter((book) => {
    // Filter by price range
    if (book.price < priceRange[0] || book.price > priceRange[1]) {
      return false;
    }
    
    // Filter by subjects
    if (selectedSubjects.length > 0 && !selectedSubjects.includes(book.subject)) {
      return false;
    }
    
    // Filter by condition
    if (selectedConditions.length > 0 && !selectedConditions.includes(book.condition)) {
      return false;
    }
    
    return true;
  });
  
  const handleAddToCart = (id: string) => {
    setCart([...cart, id]);
    const book = books.find((book) => book.id === id) as Book;
    toast({
      title: "Added to cart",
      description: `${book.title} has been added to your cart.`,
    });
  };
  
  const featuredSubjects = ["Computer Science", "Mathematics", "Economics", "Physics"];
  
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#1f1f1f] to-[#111] border-b border-[#222222]">
          <div className="container mx-auto py-10 px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-stream-accent to-stream-secondary bg-clip-text text-transparent">
                Academic Books, Better Prices
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Buy and sell textbooks from fellow students. Save money, reduce waste, and find the books you need for your courses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-stream-accent hover:bg-stream-accent/90">
                  Browse Books
                </Button>
                <Button variant="outline">
                  Sell Your Books
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Categories */}
        <div className="container mx-auto py-6 px-4">
          <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {featuredSubjects.map(subject => (
              <div 
                key={subject}
                className="bg-card border border-border rounded-lg p-4 hover:border-stream-accent transition-colors cursor-pointer"
                onClick={() => setSelectedSubjects([subject])}
              >
                <div className="flex flex-col items-center text-center">
                  {subject === "Computer Science" && <BookOpen className="mb-2 text-stream-accent" size={24} />}
                  {subject === "Mathematics" && <BookMarked className="mb-2 text-stream-accent" size={24} />}
                  {subject === "Economics" && <DollarSign className="mb-2 text-stream-accent" size={24} />}
                  {subject === "Physics" && <BookOpen className="mb-2 text-stream-accent" size={24} />}
                  <span>{subject}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <main className="flex-1 container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-64">
              <FilterSidebar
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                subjects={subjects}
                selectedSubjects={selectedSubjects}
                setSelectedSubjects={setSelectedSubjects}
                conditions={conditions}
                selectedConditions={selectedConditions}
                setSelectedConditions={setSelectedConditions}
              />
            </div>
            
            <div className="flex-1">
              <BookList 
                books={filteredBooks} 
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="mt-12 py-8 border-t border-[#222222] bg-[#111]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Book className="h-5 w-5 text-stream-accent" />
                  <span className="text-lg font-semibold bg-gradient-to-r from-stream-accent to-stream-secondary bg-clip-text text-transparent">
                    BookTrade Academia
                  </span>
                </div>
                <p className="text-muted-foreground max-w-md">
                  A community marketplace for university students to buy and sell used textbooks at fair prices.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-medium mb-3">Quick Links</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Browse Books</li>
                    <li>Sell Books</li>
                    <li>My Account</li>
                    <li>Order History</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Support</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <li>Return Policy</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Legal</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#222222] text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} BookTrade Academia. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
};

export default Index;
