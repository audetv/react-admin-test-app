import * as React from 'react';
import { List, Datagrid, TextField, ReferenceField, ListProps } from 'react-admin';

export const PostList = (props: ListProps): JSX.Element => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <ReferenceField source="userId" reference="users">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
      </Datagrid>
    </List>
);
