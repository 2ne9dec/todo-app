import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './InputPlus.module.scss';

const InputPlus = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const changeInputHandler = (evt) => {
    setInputValue(evt.target.value);
  };

  const addTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue('');
  }, [inputValue]);

  return (
    <div className={styles.inputPlus}>
      <input
        type='text'
        placeholder='Type here'
        className={styles.inputPlusValue}
        value={inputValue}
        onChange={changeInputHandler}
        onKeyDown={(evt) => {
          if (evt.key === 'Enter') {
            addTask();
          }
        }}
      />
      <button aria-label='Add' className={styles.inputPlusBtn} onClick={addTask} />
    </div>
  );
};

export default InputPlus;
