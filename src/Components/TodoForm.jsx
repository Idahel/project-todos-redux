// src/Components/TodoForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../reducers/tasks';

export const TodoForm = () => {
  const [taskText, setTaskText] = useState('');
  const [dueDate, setDueDate] = useState(''); // Add state for due date
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask({ text: taskText, dueDate: dueDate }));
      setTaskText('');
      setDueDate(''); // Clear due date after adding task
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Task text"
      />
      <input
        className='due-date'
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="Due date"
      />
      <button className='add-task-btn' onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoForm;
