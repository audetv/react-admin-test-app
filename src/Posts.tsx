import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ListProps,
} from 'react-admin';

export const PostList = (props: ListProps): JSX.Element => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
);

export const PostEdit = (props: ListProps): JSX.Element => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline={true} source="body" />
      </SimpleForm>
    </Edit>
);
