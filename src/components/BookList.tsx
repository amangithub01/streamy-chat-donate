
import React, { useState } from 'react';
import BookCard from './BookCard';
import { Book } from '@/types/book';
import { Grid2X2, List, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface BookListProps {
  books: Book[];
  onAddToCart: (id: string) => void;
}

const BookList = ({ books, onAddToCart }: BookListProps) => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('featured');
  
  if (books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <BookCard className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium mb-2">No books match your search criteria</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Try adjusting your filters or search terms to find more books.
        </p>
        <Button variant="outline">Clear Filters</Button>
      </div>
    );
  }
  
  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Newest', value: 'newest' },
    { label: 'Condition', value: 'condition' }
  ];
  
  // Mocked pagination logic (in a real app, you'd have actual pagination)
  const totalPages = Math.ceil(books.length / 9); // Assuming 9 books per page
  const currentPage = 1;
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center">
          <p className="text-muted-foreground mr-2">
            Showing <span className="font-medium text-foreground">{books.length}</span> results
          </p>
          
          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden flex items-center gap-1">
                <SlidersHorizontal size={14} />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <div className="h-full pt-6">
                {/* Filter content for mobile */}
                {/* This would contain the same filters as the sidebar */}
                <p className="text-lg font-semibold mb-4">Filters</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex gap-3 items-center">
          <select 
            className="bg-muted border-none rounded text-sm py-1 px-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <div className="flex gap-1">
            <Button
              variant={view === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setView('grid')}
              className={view === 'grid' ? 'bg-stream-accent' : ''}
            >
              <Grid2X2 size={18} />
            </Button>
            <Button
              variant={view === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setView('list')}
              className={view === 'list' ? 'bg-stream-accent' : ''}
            >
              <List size={18} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className={view === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        : 'space-y-4'
      }>
        {books.map(book => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            originalPrice={book.originalPrice}
            condition={book.condition}
            coverImage={book.coverImage}
            subject={book.subject}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === i + 1}
                  className={currentPage === i + 1 ? 'bg-stream-accent' : ''}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default BookList;
