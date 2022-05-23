import React from "react";
import styles from "./tasks.module.css";
import Task from "./../Task/Task";

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair

  return (
    <>
      <ul data-cy="tasks" className={styles.tasks} type="none">
        {
          /* Task List */
          props.data.map((item) => {
            return (
              <Task
                key={item.id}
                {...item}
                onDelete={(id) => props.onDelete(id)}
              />
            );
          })
        }
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {props.show ? "ADD A NEW TASK" : null}
      </div>
    </>
  );
};

export default Tasks;
