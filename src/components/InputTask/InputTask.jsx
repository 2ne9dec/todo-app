import React, { useEffect, useRef, useState } from 'react';
import styles from './InputTask.module.scss';

const InputTask = ({ onDone, onEdit, onRemoved, id, title }) => {
  const [checked, setChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(title);
  const editInputTitleRef = useRef(null);

  useEffect(() => {
    if (isEditMode) {
      editInputTitleRef?.current?.focus();
    }
  }, [isEditMode]);

  return (
    <div className={styles.inputTask}>
      <label className={styles.inputTaskLabel}>
        <input
          type='checkbox'
          disabled={isEditMode}
          checked={checked}
          className={styles.inputTaskCheckbox}
          onChange={(evt) => {
            setChecked(evt.target.checked);
            if (evt.target.checked) {
              setTimeout(() => {
                onDone(id);
              }, 300);
            }
          }}
        />
        {isEditMode ? (
          <input
            value={value}
            ref={editInputTitleRef}
            className={styles.inputTaskEditTitle}
            onChange={(evt) => {
              setValue(evt.target.value);
            }}
            onKeyDown={(evt) => {
              if (evt.key === 'Enter') {
                onEdit(id, value);
                setIsEditMode(false);
              }
            }}
          />
        ) : (
          <h3 className={styles.inputTaskTitle}>{title}</h3>
        )}
      </label>
      {isEditMode ? (
        <button
          aria-label='Save'
          className={styles.inputTaskSave}
          onClick={() => {
            onEdit(id, value);
            setIsEditMode(false);
          }}
        />
      ) : (
        <button
          aria-label='Edit'
          className={styles.inputTaskEdit}
          onClick={() => {
            setIsEditMode(true);
          }}
        />
      )}

      <button
        aria-label='Remove'
        className={styles.inputTaskRemove}
        onClick={() => {
          if (window.confirm('Are u sure?')) {
            onRemoved(id);
          }
        }}
      />
    </div>
  );
};

export default InputTask;
