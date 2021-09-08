import React from 'react';
import { Admin, EditGuesser, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './Users';
import { PostList } from './Posts';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="posts" list={PostList} edit={EditGuesser} />
  <Resource name="users" list={UserList} />
</Admin>;

export default App;
