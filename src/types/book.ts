
export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  condition: 'New' | 'Like New' | 'Very Good' | 'Good' | 'Acceptable';
  coverImage: string;
  subject: string;
  description: string;
  seller: {
    id: string;
    name: string;
    rating: number;
  };
  isbn: string;
  publicationYear: number;
  university?: string;
  course?: string;
}
