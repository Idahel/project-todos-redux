// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './reducers/tasks';
import Header from './Components/Header.jsx';
import TodoList from './Components/TodoList';
import TodoForm from './Components/ToDoForm';

const reducer = combineReducers({
  tasks: tasksReducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoForm />
      <TodoList />
    </Provider>
  );
};
export default App;