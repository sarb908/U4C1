import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = (props) => {
  // sample values to be replaced

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <h4>
        you have
        <b data-cy="header-remaining-task">{props.unCompletedTask}</b>
        of
        <b data-cy="header-total-task">{props.totalTask}</b>
        tasks remaining
      </h4>
    </div>
  );
};

export default TaskHeader;
