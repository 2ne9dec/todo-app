import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputPlus from '../components/InputPlus/InputPlus';
import InputTask from '../components/InputTask/InputTask';
import { createTask, updateTask, removeTask } from '../redux/tasksSlice';
import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.myTasks.tasks);

  const onAdd = (title) => {
    dispatch(createTask(title));
  };

  const updateTaskHandler = (id, value) => {
    dispatch(updateTask(id, value));
  };

  const removeTaskHandler = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}>
        <InputPlus onAdd={onAdd} />
      </section>
      <section className={styles.articleSection}>
        {!tasks.length && <p className={styles.articleText}>There is no one task!</p>}
        {tasks.map((task) => (
          <InputTask
            key={task.id}
            id={task.id}
            title={task.title}
            onDone={removeTaskHandler}
            onEdit={updateTaskHandler}
            onRemoved={removeTaskHandler}
          />
        ))}
      </section>
    </article>
  );
};

export default App;
