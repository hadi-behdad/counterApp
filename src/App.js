import React, { useState, useEffect, useRef } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

const useConstructor = (callBack = () => {}) => {
  /*  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);*/

  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 1 },
    { id: 3, value: 1 },
    { id: 4, value: 1 },
  ]);

  useConstructor(() => {
    console.log("App - CONSTRUCTOR");
  });

  useEffect(() => {
    console.log("App - AFTER EACH RENDER");
  });

  useEffect(() => {
    console.log("App - COMPONENT DID MOUNT");
    return () => {
      console.log("App - COMPONENT WILL UNMOUNT FROM DOM");
    };
  }, []);

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      console.log("App - COMPONENT DID MOUNT");
      mounted.current = true;
    } else {
      console.log("App - COMPONENT DID UPDATE");
    }
  });

  useEffect(() => {
    console.log("App - COUNTERS IS UPDATED");
  }, [counters]);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const itemIndex = counters.indexOf(counter);
    newCounters[itemIndex] = { ...counter };
    newCounters[itemIndex].value++;

    setCounters(newCounters);
  };

  const handleDecrement = (counter) => {
    const newCounters = [...counters];
    const itemIndex = counters.indexOf(counter);
    newCounters[itemIndex] = { ...counter };
    newCounters[itemIndex].value--;

    setCounters(newCounters);
  };

  const handleReset = () => {
    const newCounters = [...counters];
    newCounters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(newCounters);
  };

  console.log("App - COMPONENT WILL RENDER");
  return (
    <React.Fragment>
      <NavBar
        totalCounters={counters.filter((c) => c.value > 0).length}
      ></NavBar>
      <main className="container">
        <Counters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
