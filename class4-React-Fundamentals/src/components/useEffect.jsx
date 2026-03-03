import { useState, useEffect } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [Test, setTest] = useState("");
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("Use Effect triggered!");
  }, [count]); //[] => called only during mounting, [count] => called during mounting and updating stage
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => setTest("Hello")}>Testing</button>
    </div>
  );
};

export default Test;
