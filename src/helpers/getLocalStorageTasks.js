export const getTasksFromStorage = () => {
  const currentState = JSON.parse(localStorage.getItem('tasks'));
  return currentState;
};
