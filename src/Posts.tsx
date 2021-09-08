import * as React from 'react';
import { Theme, useMediaQuery } from '@material-ui/core';
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleList,
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

export const PostList = (props: ListProps): JSX.Element => {
  const isSmall = useMediaQuery<Theme>((theme: Theme) => theme.breakpoints.down('sm'));

  return (
      <List filters={postFilters} {...props}>
        {isSmall ? (
            <SimpleList
                primaryText={record => record.title}
                secondaryText={record => `${record.views} views`}
                tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
            />
        ) : (
            <Datagrid>
              <TextField source="id" />
              <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
              </ReferenceField>
              <TextField source="title" />
              <TextField source="body" />
              <EditButton />
            </Datagrid>
        )}
      </List>
  );

}

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

