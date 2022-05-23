import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = (props) => {
  
  const [completed, setCompleted] = React.useState(props.data.isCompleted)
  // NOTE: do not delete `data-cy` key value pair
  return (
      <div className="todo">
          <li data-cy="task" className={styles.task}>
            <input type="checkbox" data-cy="task-checkbox" onClick={(e) => (
              setCompleted(e.target.checked)
            )}/>
            
            <div data-cy="task-text" >
              <p className={completed ? "taskdiv" : ""}>{props.data.value}</p>
            </div>
            {/* Counter here */}
            <Counter/>
            <button data-cy="task-remove-button">Delete</button>
          </li>

          
    </div>
    
  );
};

export default Task;
