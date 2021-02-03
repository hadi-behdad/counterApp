import React, { useEffect } from "react";

const Counter = (props) => {
  const { onIncrement, onDecrement, onDelete, counter } = props;

  useEffect(() => {
    console.log("Counter - ");
    return () => {
      console.log("Counter - COMPONENT WILL UNMOUNT FROM DOM");
    };
  }, []);

  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    return (classes += counter.value === 0 ? "warning" : "primary");
  };

  console.log("Counter - COMPONENT WILL RENDER");
  return (
    <div className="row">
      <div className="col-1">
        <span style={{ fontSize: 15 }} className={getBadgeClasses()}>
          {formatCount()}
        </span>
      </div>
      <div className="col">
        <button
          onClick={() => {
            onIncrement(counter);
          }}
          className="btn btn-secondary btn-sm mr-2"
        >
          +
        </button>
        <button
          onClick={() => {
            onDecrement(counter);
          }}
          className="btn btn-secondary btn-sm"
          disabled={counter.value === 0 ? "true" : ""}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm ml-2"
        >
          x
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Counter;
