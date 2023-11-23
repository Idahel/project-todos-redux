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

export default Form;
