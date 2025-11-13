import React from "react";

const count = () => {
    const [count, setCount]= React.useState(0);
    const decrease = () => setCount(count - 1);
    const increase = () => setCount(count + 1);
    return (
        <div id="counter">
            <h1>Counter</h1>
            <div className="countert-container">
                <button onClick={decrease}>-</button>
                <span>(count}</span>
                <button onClick={increase}>+</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}
export default count;