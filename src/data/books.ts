
import { Book } from '@/types/book';

export const books: Book[] = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    price: 49.99,
    originalPrice: 89.99,
    condition: "Like New",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    subject: "Computer Science",
    description: "This internationally acclaimed textbook provides a comprehensive introduction to the modern study of computer algorithms.",
    seller: {
      id: "s1",
      name: "David Chen",
      rating: 4.8
    },
    isbn: "978-0262033848",
    publicationYear: 2009,
    university: "MIT",
    course: "CS301"
  },
  {
    id: "2",
    title: "Organic Chemistry",
    author: "Paula Yurkanis Bruice",
    price: 55.00,
    originalPrice: 75.99,
    condition: "Good",
    coverImage: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1022&q=80",
    subject: "Chemistry",
    description: "A comprehensive yet accessible exploration of the concepts and applications of organic chemistry.",
    seller: {
      id: "s2",
      name: "Emma Rodriguez",
      rating: 4.5
    },
    isbn: "978-0134042282",
    publicationYear: 2016,
    university: "UC Berkeley",
    course: "CHEM322"
  },
  {
    id: "3",
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    price: 42.50,
    originalPrice: 59.99,
    condition: "Very Good",
    coverImage: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1012&q=80",
    subject: "Economics",
    description: "Mankiw's Principles of Economics has been the most widely adopted new economics textbook in the last 20 years.",
    seller: {
      id: "s3",
      name: "Michael Johnson",
      rating: 4.7
    },
    isbn: "978-0538453059",
    publicationYear: 2011,
    university: "Harvard",
    course: "ECON101"
  },
  {
    id: "4",
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    price: 65.00,
    originalPrice: 110.00,
    condition: "New",
    coverImage: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80",
    subject: "Mathematics",
    description: "This text is rigorous without being inaccessible and clear without being too informal—it has the perfect balance for instructors and their students.",
    seller: {
      id: "s4",
      name: "Sarah Williams",
      rating: 4.9
    },
    isbn: "978-1285741550",
    publicationYear: 2015,
    university: "Stanford",
    course: "MATH101"
  },
  {
    id: "5",
    title: "Essential Cell Biology",
    author: "Bruce Alberts, Dennis Bray, Karen Hopkin",
    price: 49.99,
    originalPrice: 79.99,
    condition: "Very Good",
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    subject: "Biology",
    description: "A comprehensive introduction to the fundamentals of cell biology.",
    seller: {
      id: "s5",
      name: "Jennifer Lopez",
      rating: 4.6
    },
    isbn: "978-0393680362",
    publicationYear: 2018,
    university: "Johns Hopkins",
    course: "BIO201"
  },
  {
    id: "6",
    title: "Fundamentals of Physics",
    author: "David Halliday, Robert Resnick, Jearl Walker",
    price: 59.99,
    originalPrice: 95.00,
    condition: "Good",
    coverImage: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    subject: "Physics",
    description: "A comprehensive resource for building problem-solving skills that engineers and scientists need.",
    seller: {
      id: "s6",
      name: "James Wilson",
      rating: 4.4
    },
    isbn: "978-1118230725",
    publicationYear: 2013,
    university: "Caltech",
    course: "PHYS101"
  }
];

export const subjects = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Economics",
  "Psychology",
  "Engineering",
  "Literature",
  "History"
];

export const conditions = [
  "New",
  "Like New",
  "Very Good",
  "Good",
  "Acceptable"
];
