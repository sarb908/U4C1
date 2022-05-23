import React, { useState } from "react";
import Tasks from "./Tasks/Tasks";
import styles from "./taskApp.module.css";
import datas from "./../data/tasks.json";
import AddTask from "./AddTask/AddTask";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = () => {
  const [data, setData] = useState(datas);
  const [show, setShow] = useState(false);

  // NOTE: do not delete `data-cy` key value pair
  const onDeleteHandler = (id) => {
    console.log(id);
    const newList = data.filter((item) => item.id !== id);
    setData([...newList]);
    if (newList.length <= 0) {
      setShow(true);
    }
  };
  const newTodoHandler = (e) => {
    console.log(data);
    const newList = data.filter((item) => item.text !== e.text);
    setData([...newList, e]);
    setShow(false);
  };
  let totalTask = data.length;
  let unCompletedTask = data.reduce((acc, el) => {
    if (!el.done) {
      return (acc += 1);
    }
    return (acc += 0);
  }, 0);
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader totalTask={totalTask} unCompletedTask={unCompletedTask} />
      <AddTask newTodo={newTodoHandler} />
      <Tasks show={show} data={data} onDelete={(id) => onDeleteHandler(id)} />
    </div>
  );
};

export default TaskApp;
