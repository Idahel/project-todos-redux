import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './reducers/tasks';
import {Header} from './Components/Header';
import {TodoList} from './Components/TodoList';
import {Form} from './Components/Form.jsx';

const reducer = combineReducers({
  tasks: tasksReducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Form />
      <TodoList />
    </Provider>
  );
};
export default App;