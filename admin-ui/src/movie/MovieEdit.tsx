import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const MovieEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="imdbUrl" source="imdbUrl" />
        <NumberInput label="rating" source="rating" />
        <TextInput label="title" source="title" />
        <BooleanInput label="watched" source="watched" />
      </SimpleForm>
    </Edit>
  );
};
