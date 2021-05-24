export type Movie = {
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  imdbUrl: string;
  rating: number | null;
  title: string;
  updatedAt: Date;
  watched: boolean;
};
