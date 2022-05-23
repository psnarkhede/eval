import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (

    props.data.map((el,ind) => (
      <div key={ind}>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
      <Task data={el}/>
    </div>
     ) )
    
  );
};

export default Tasks;
