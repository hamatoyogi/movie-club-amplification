export type MovieCreateInput = {
  imageUrl?: string | null;
  imdbUrl: string;
  rating?: number | null;
  title: string;
  watched: boolean;
};
