import { useState } from "react";

const Counter = ({initialCount = 0}) => {
    const [count, setCount] = useState(initialCount);

    const handleIncrement = () => {
        setCount((prevCount) => {
            return prevCount + 1; //react takes care of the assigning part of prevCount to previous value
        })
    }

    const handleDecrement = () => {
        setCount((prevCount) => {
            return prevCount - 1;
        })
    }

    const handleReset = () => {
        setCount(initialCount);
    }
    
    return (
        <div>
            <h2>Count: {count}</h2>
            <div style={{display: "flex", gap: "8px"}}>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            
        </div>
    )
}

export default Counter