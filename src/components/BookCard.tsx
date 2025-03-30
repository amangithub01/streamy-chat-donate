
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, BookOpen, Heart } from 'lucide-react';

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

const getConditionColor = (condition: string) => {
  switch (condition) {
    case 'New':
      return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    case 'Like New':
      return 'bg-green-500/10 text-green-500 border-green-500/20';
    case 'Very Good':
      return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    case 'Good':
      return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
    case 'Acceptable':
      return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
    default:
      return 'bg-muted/50';
  }
};

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
    <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg border-muted h-full flex flex-col group">
      <div className="relative pb-[140%] bg-muted overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
        />
        <div className="absolute top-2 right-2 flex flex-col items-end gap-2">
          {discount > 0 && (
            <Badge className="bg-stream-accent">
              {discount}% OFF
            </Badge>
          )}
          <Badge className={`${getConditionColor(condition)} border`}>
            {condition}
          </Badge>
        </div>
        <button className="absolute top-2 left-2 p-1.5 bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart size={16} className="text-white hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <Badge variant="outline" className="mb-2 bg-muted/30">
          {subject}
        </Badge>
        <h3 className="font-semibold text-base line-clamp-2 mb-1 group-hover:text-stream-accent transition-colors">{title}</h3>
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
          className="w-full bg-gradient-to-r from-stream-accent to-stream-secondary hover:opacity-90 transition-opacity"
          size="sm"
        >
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" size="sm" className="w-full hover:bg-muted/30 transition-colors">
          <BookOpen size={16} className="mr-2" />
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
