import { createSlice } from '@reduxjs/toolkit';
import { generateId } from '../helpers/helpers';

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Task - 1',
      createdAt: 'dsa',
    },
    {
      id: '2',
      title: 'Task - 2',
      createdAt: 'asd',
    },
  ],
};

const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    createTask(state, action) {
      state.tasks.push({
        id: generateId(),
        title: action.payload,
        createdAt: Date.now(),
      });
    },
    updateTask(state, action) {
      const { id, value } = action.payload;
      state.tasks.map((task) => {
        task.title = task.id === id
          ? value
          : task.title;
      });
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export default tasksSlice.reducer;
export const { createTask, updateTask, removeTask } = tasksSlice.actions;
