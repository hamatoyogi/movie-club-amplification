import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type MovieWhereInput = {
  id?: StringFilter;
  title?: StringFilter;
  watched?: BooleanFilter;
};
