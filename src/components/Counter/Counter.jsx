import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = (props) => {
  const [count, setCount] = useState(props.count);
  // sample value to be replaced

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button
        data-cy="task-counter-increment-button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <span data-cy="task-counter-value">{count}</span>
      <button
        data-cy="task-counter-decrement-button"
        onClick={() => {
          if (count <= 1) {
            return;
          }
          setCount((prev) => {
            return prev - 1;
          });
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
