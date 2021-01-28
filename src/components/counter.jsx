import React, { useState } from "react";

const Counter = (props) => {
  let [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(++value);
  };
  const formatCount = () => {
    return value === 0 ? "Zero" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    return (classes += value === 0 ? "warning" : "primary");
  };
  return (
    <React.Fragment>
      <span style={{ fontSize: 15 }} className={getBadgeClasses()}>
        {formatCount()}
      </span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm">
        Increment
      </button>
    </React.Fragment>
  );
};

export default Counter;
