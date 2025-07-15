import { useState } from 'react';
import CounterButton from './CounterButton';
import './Counter.css';

export default function Counter() {
    //[0, f]
    const [count, setCount] = useState(0);

    function incrementCounter(incrementBy) {
        setCount(prevCount => prevCount + incrementBy);
    }

    function decrementCounter(decrementBy) {
        setCount(prevCount => prevCount - decrementBy);
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <CounterButton incrementCounter={incrementCounter} decrementCounter={decrementCounter} />
            <CounterButton incrementBy={2} decrementBy={2}
                incrementCounter={incrementCounter} decrementCounter={decrementCounter} />
            <CounterButton incrementBy={5} decrementBy={5}
                incrementCounter={incrementCounter} decrementCounter={decrementCounter} />
            <button className="resetButton" onClick={() => setCount(0)}> Reset </button>
        </div>
    )
}
