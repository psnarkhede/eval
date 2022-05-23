import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced

  let [count, setCount] = React.useState(1)
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button className="btn1" data-cy="task-counter-increment-button" onClick={() => (
        count = count + 1,
        setCount(count)
      )}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button className="btn2" data-cy="task-counter-decrement-button" onClick={() => (
        count > 1 ? count=count-1 : count,
        setCount(count)
      )}>-</button>
    </div>
  );
};

export default Counter;
