import * as React from 'react';
import { List, Datagrid, TextField, ReferenceField, ListProps, EditButton } from 'react-admin';

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
