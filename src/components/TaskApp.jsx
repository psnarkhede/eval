import React from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [inputTask, setInputTask] = React.useState([])

  const inputtaskfn = (val) => {
    if(val !== ""){
    inputTask.push({value:val, isCompleted:false})
      setInputTask([...inputTask])  
    }
  }


  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader data={[...inputTask]}/>


      {/* Add Task */}
      <AddTask inputtask={inputtaskfn}/>


      {/* Tasks */}
      <Tasks data={[...inputTask]} />

    </div>
  );
};

export default TaskApp;
