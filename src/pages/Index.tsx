
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/context/AuthContext';
import { books, subjects, conditions } from '@/data/books';
import FilterSidebar from '@/components/FilterSidebar';
import BookList from '@/components/BookList';
import { useToast } from "@/components/ui/use-toast";
import { Book } from '@/types/book';

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
  
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        
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
      </div>
    </AuthProvider>
  );
};

export default Index;
