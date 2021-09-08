import * as React from 'react';
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  ListProps,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

const PostTitle = ({ record }: Record<any, any>) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostList = (props: ListProps): JSX.Element => (
    <List filters={postFilters} {...props}>
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
    <Edit title={<PostTitle />} {...props}>
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

export const PostCreate = (props: ListProps): JSX.Element => (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Create>
);

