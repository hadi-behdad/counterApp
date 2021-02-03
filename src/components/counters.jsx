import Counter from "./counter";
import React from "react";

const Counters = (props) => {
  const { counters, onDelete, onIncrement, onDecrement, onReset } = props;

  console.log("Counters - COMPONENT WILL RENDER");
  return (
    <React.Fragment>
      <button onClick={onReset} className="btn btn-danger m-2">
        Reset
      </button>
      {counters.map((counter, index) => {
        return (
          <Counter
            key={index}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <button className="btn btn-warning btn-sm m-2">
              This button is sent from parent
            </button>
            <label className="txt">And this text</label>
            <button className="btn btn-primary btn-sm m-2">
              Counter number is {counter.id}
            </button>
          </Counter>
        );
      })}
    </React.Fragment>
  );
};

export default Counters;
