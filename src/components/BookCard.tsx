
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, BookOpen } from 'lucide-react';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  condition: 'New' | 'Like New' | 'Very Good' | 'Good' | 'Acceptable';
  coverImage: string;
  subject: string;
  onAddToCart: (id: string) => void;
}

const BookCard = ({
  id,
  title,
  author,
  price,
  originalPrice,
  condition,
  coverImage,
  subject,
  onAddToCart
}: BookCardProps) => {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-muted h-full flex flex-col">
      <div className="relative pb-[140%] bg-muted">
        <img
          src={coverImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105"
        />
        {discount > 0 && (
          <Badge className="absolute top-2 right-2 bg-stream-accent">
            {discount}% OFF
          </Badge>
        )}
        <Badge className="absolute top-2 left-2 bg-card text-card-foreground border border-input">
          {condition}
        </Badge>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <Badge variant="outline" className="mb-2 bg-muted/50">
          {subject}
        </Badge>
        <h3 className="font-semibold text-base line-clamp-2 mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{author}</p>
        <div className="flex items-center mt-2 space-x-2">
          <span className="font-bold text-lg">${price.toFixed(2)}</span>
          {originalPrice > price && (
            <span className="text-muted-foreground text-sm line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 gap-2">
        <Button
          onClick={() => onAddToCart(id)}
          className="w-full bg-gradient-to-r from-stream-accent to-stream-secondary hover:opacity-90"
          size="sm"
        >
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" size="sm" className="w-full">
          <BookOpen size={16} className="mr-2" />
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
