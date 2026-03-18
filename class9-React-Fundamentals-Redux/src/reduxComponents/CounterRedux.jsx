import React from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../redux/counterSlice";
const actions = counterSlice.actions;
function CounterRedux() {
  const { count } = useSelector((store) => {
    return store.counterState;
  });

  const dispatch = useDispatch();

  const handleIncrement = () => {
    console.log("Handle Increment!");
    dispatch(actions.increment());
  };

  const handleDecrement = () => {
    console.log("Handle Decrement!");
    dispatch(actions.decrement());
  };

  // const handleReset = () => {
  //   setCount(initialCount);
  // };

  return (
    <div>
      <h2>Count: {count}</h2>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} disabled={count === 0}>
          Decrement
        </button>
        {/* <button onClick={handleReset}>Reset</button> */}
      </div>
    </div>
  );
}

export default CounterRedux;
