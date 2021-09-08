import React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="posts" list={ListGuesser} />
  <Resource name="users" list={UserList} />
</Admin>;

export default App;
