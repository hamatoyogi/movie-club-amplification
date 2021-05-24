import { SortOrder } from "../../util/SortOrder";

export type MovieOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  imdbUrl?: SortOrder;
  rating?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  watched?: SortOrder;
};
