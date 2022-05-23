import React, { useState } from "react";
import styles from "./addTask.module.css";
import { v4 as uuid } from "uuid";
const AddTask = (props) => {
  const [value, setValue] = useState("");
  // NOTE: do not delete `data-cy` key value pair
  const valueHandler = (e) => {
    setValue(e.target.value.trim());
  };
  const addTodoHandker = () => {
    if (value === "") {
      setValue("");
      return;
    }
    let payload = {
      id: uuid(),
      text: value,
      done: false,
      count: 1,
    };
    props.newTodo(payload);
    console.log(value);
    setValue("");
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        value={value}
        onChange={valueHandler}
        placeholder="Add task"
      />
      <button data-cy="add-task-button" onClick={addTodoHandker}>
        +
      </button>
    </div>
  );
};

export default AddTask;
