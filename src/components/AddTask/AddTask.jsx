import React from "react";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  // NOTE: do not delete `data-cy` key value pair

  const [inputTask, setInputTask] = React.useState("")
  
  return (
    <div className={styles.todoForm}>
      <input onChange={(e) => setInputTask(e.target.value)} placeholder="enter Task" data-cy="add-task-input" type="text" />
      <button onClick={() => (props.inputtask(inputTask))} data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
