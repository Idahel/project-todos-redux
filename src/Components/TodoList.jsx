// src/Components/TodoList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    toggleTask,
    removeTask,
    tasksSlice,
    completeAllTasks,
    setFilter,
    clearFilter,
  } from '../reducers/tasks';


  export const TodoList = () => {
    // Destructure 'tasks' and 'filter' from the state
    const { tasks, filter } = useSelector((state) => state.tasks);
    const uncompletedTasks = tasks.filter((task) => !task.complete);
    const dispatch = useDispatch();
  
    const handleToggle = (id) => {
      dispatch(toggleTask({ id }));
    };

  const handleRemove = (id) => {
    dispatch(removeTask({ id }));
  };

  const handleCompleteAll = () => {
    dispatch(completeAllTasks());
  };

  const filteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.complete);
      case 'uncompleted':
        return tasks.filter((task) => !task.complete);
      default:
        return tasks;
    }
  };

  return (
    <section className='todo-list'>
    <div className='tasks'>
    <p>Total Tasks: {tasks.length}</p>
    <p>Uncompleted Tasks: {uncompletedTasks.length}</p>
    <div>
      <label>
        Filter:
        <select className='task-filter' value={filter} onChange={(e) => dispatch(setFilter(e.target.value))}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </label>
    </div>
    <button className="complete-all-btn"onClick={handleCompleteAll}>Complete All</button>
    <ul>
      {filteredTasks().map((task) => (
        <li key={task.id}>
            <input
              type="checkbox"
              checked={task.complete}
              onChange={() => handleToggle(task.id)}
            />
            <span style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <span>Created: {new Date(task.timestamp).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</span>
            <span>Due Date: {new Date(task.dueDate).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</span>
                <button onClick={() => handleRemove(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default TodoList;
