
import React, { useState } from 'react';
import BookCard from './BookCard';
import { Book } from '@/types/book';
import { Grid2X2, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from "@/components/ui/pagination";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BookListProps {
  books: Book[];
  onAddToCart: (id: string) => void;
  isLoading?: boolean;
  isError?: boolean;
}

const BookList = ({ books, onAddToCart, isLoading = false, isError = false }: BookListProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  if (isLoading) {
    return <div>Loading books...</div>;
  }
  
  if (isError) {
    return <div>Error loading books. Please try again later.</div>;
  }
  
  if (books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <BookCard
            id=""
            title=""
            author=""
            price={0}
            originalPrice={0}
            condition="New"
            coverImage=""
            subject=""
            onAddToCart={() => {}}
          />
        </div>
        <h3 className="text-lg font-medium mb-2">No books match your search criteria</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Try adjusting your filters or search terms to find what you're looking for.
        </p>
        <Button variant="outline">Clear all filters</Button>
      </div>
    );
  }
  
  const sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Title', value: 'title' },
    { label: 'Author', value: 'author' },
    { label: 'Condition', value: 'condition' }
  ];
  
  const totalPages = Math.ceil(books.length / 9);
  const currentPage = 1;
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <p>
            Showing <span className="font-medium text-foreground">{books.length}</span> results
          </p>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden flex items-center gap-1">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <div className="h-full pt-6">
                <p className="text-lg font-semibold mb-4">Filters</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex items-center gap-2 ml-auto">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none ${viewMode === 'grid' ? 'bg-muted' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none ${viewMode === 'list' ? 'bg-muted' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className={viewMode === 'grid' 
        ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'
        : 'flex flex-col space-y-4'
      }>
        {books.map((book) => (
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
            className={viewMode === 'list' ? 'flex-row' : ''}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink href="#" isActive={i + 1 === currentPage}>
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
