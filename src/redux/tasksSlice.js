import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromStorage } from '../helpers/getLocalStorageTasks';
import { generateId } from '../helpers/helpers';

const tasks = getTasksFromStorage();

const initialState = {
  tasks: tasks ?? [],
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
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, action) {
      const { id, value } = action.payload;
      state.tasks.map((task) => {
        task.title = task.id === id ? value : task.title;
      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export default tasksSlice.reducer;
export const { createTask, updateTask, removeTask } = tasksSlice.actions;
