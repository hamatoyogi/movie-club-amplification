import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const MovieCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="imdbUrl" source="imdbUrl" />
        <NumberInput label="rating" source="rating" />
        <TextInput label="title" source="title" />
        <BooleanInput label="watched" source="watched" />
      </SimpleForm>
    </Create>
  );
};
