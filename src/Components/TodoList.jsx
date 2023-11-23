import { useSelector, useDispatch } from 'react-redux';
import {
    toggleTask,
    removeTask,
    completeAllTasks,
    setFilter,
  } from '../reducers/tasks';


  export const TodoList = () => {

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
    <div>
    <div className='task-numbers'>
    <p>Total Tasks: {tasks.length}</p>
    <p>Uncompleted Tasks: {uncompletedTasks.length}</p>
    </div>
    <div>
      <label className='filter-label'>
        Sort tasks:
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
             <span className='task-text'>
                {task.text}
              </span>
            <span className='new-date-list'>Created: {new Date(task.timestamp).toLocaleString('en-US', {
                  year: 'numeric',
                  month: '2-digit', 
                  day: '2-digit',   
                })}</span>
            <span className='due-date-list'>Due Date: {new Date(task.dueDate).toLocaleString('en-US', {
                  year: 'numeric',
                  month: '2-digit', 
                  day: '2-digit', 
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
