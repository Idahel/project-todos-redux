import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
      tasks: [],
      filter: 'all',
    },

  reducers: {
    addTask: (state, action) => {
 
        const newTask = {
          id: state.tasks.length + 1,
          text: action.payload.text,
          complete: false,
          timestamp: new Date().toISOString(),
          dueDate: action.payload.dueDate,
        };
        state.tasks = state.tasks.concat(newTask);
      },
    setFilter: (state, action) => {
        state.filter = action.payload;
      },
      clearFilter: (state) => {
        state.filter = 'all';
      },
      toggleTask: (state, action) => {
        const task = state.tasks.find((t) => t.id === action.payload.id);
        if (task) {
          task.complete = !task.complete;
        }
      },

      removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      },

    completeAllTasks: (state) => {
        state.tasks.forEach((task) => {
          task.complete = true;
        });
      },
  },
});

export const { addTask, toggleTask, removeTask, completeAllTasks, setFilter, clearFilter } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
