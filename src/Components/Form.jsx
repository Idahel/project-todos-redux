import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../reducers/tasks';

export const Form = () => {
  const [taskText, setTaskText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask({ text: taskText, dueDate: dueDate }));
      setTaskText('');
      setDueDate(''); 
    }
  };

  const handleDateClick = () => {
    if (dueDate === 'Due date') {
      setDueDate('');
    }
  };

  return (
    <div className='form-wrapper'>
      <p className='task-label'>Task:</p>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Task text"
      />
      <p className='due-date-label'>Due Date:</p>
      <input
        className='due-date-btn'
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        onClick={handleDateClick}
      />
      <button className='add-task-btn' onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Form;
