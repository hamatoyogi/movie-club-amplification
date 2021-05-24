import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MovieList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Movies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="imdbUrl" source="imdbUrl" />
        <TextField label="rating" source="rating" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="watched" source="watched" />
      </Datagrid>
    </List>
  );
};
