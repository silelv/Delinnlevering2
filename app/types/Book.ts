export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    averageRating?: number;
    imageLinks?: {
      thumbnail?: string;
    };
  };
};