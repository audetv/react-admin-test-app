import * as React from "react";
import { List, Datagrid, TextField, EmailField, ListProps } from 'react-admin';

export const UserList = (props: ListProps): JSX.Element => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
);
