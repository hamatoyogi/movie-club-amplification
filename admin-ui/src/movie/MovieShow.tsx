import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const MovieShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="imdbUrl" source="imdbUrl" />
        <TextField label="rating" source="rating" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="watched" source="watched" />
      </SimpleShowLayout>
    </Show>
  );
};
