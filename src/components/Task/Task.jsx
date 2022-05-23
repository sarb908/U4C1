import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "./../Counter/Counter";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const [valid, isValid] = useState(props.done);
  const onChangeHandler = (e) => {
    console.log(e.target.checked);
    isValid(e.target.checked);
  };
  return (
    <li data-cy="task" className={styles.task}>
      <input
        type="checkbox"
        data-cy="task-checkbox"
        onChange={onChangeHandler}
        checked={valid}
      />

      <div
        data-cy="task-text"
        style={valid ? { textDecoration: "line-through" } : null}
      >
        {props.text}
      </div>

      <Counter count={props.count} />

      <button
        data-cy="task-remove-button"
        onClick={() => props.onDelete(props.id)}
      >
        X
      </button>
    </li>
  );
};

export default Task;
