
import React from 'react';
import BookCard from './BookCard';
import { Book } from '@/types/book';
import { Grid2X2, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

interface BookListProps {
  books: Book[];
  onAddToCart: (id: string) => void;
}

const BookList = ({ books, onAddToCart }: BookListProps) => {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  
  if (books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-muted-foreground mb-4">No books match your search criteria</p>
        <Button variant="outline">Clear Filters</Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          Showing <span className="font-medium text-foreground">{books.length}</span> results
        </p>
        <div className="flex gap-2">
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
      
      <div className={view === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'
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
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BookList;
