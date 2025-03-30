
export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  condition: 'New' | 'Like New' | 'Very Good' | 'Good' | 'Acceptable';
  coverImage: string;
  subject: string;
  description?: string;
  isbn?: string;
  publisher?: string;
  publicationYear?: number;
  edition?: string;
  pageCount?: number;
  language?: string;
}
