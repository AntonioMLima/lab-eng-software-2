import { useState } from 'react';
import './CounterList.css'

let initialCounters = [
    0, 0, 0
];

export default function CounterList() {
    const [counters, setCounters] = useState(
        initialCounters
    );

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
            if (i == index) {
                // Increment the clicked counter
                return c + 1;
            } else {
                // The rest haven't changed
                return c;
            }
        });
        setCounters(nextCounters);
    }

    return (
        <div  className="counter-list">
            <u1>
                {counters.map((counter, i) => (
                    <li key={i}>
                        {counter}
                        <button onClick={() => {
                            handleIncrementClick(i);
                        }}>
                            +1
                        </button>
                    </li>
                ))}
            </u1>

        </div>
    );
}   