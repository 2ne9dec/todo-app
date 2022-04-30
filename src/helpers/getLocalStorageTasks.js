export const getTasksFromStorage = () => {
  const currentState = JSON.parse(localStorage.getItem('tasks'));
  return currentState.length > 0 ? currentState : localStorage.clear();
};
