import { useState } from 'react';
import './Counter.css';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <div className='counter'>
                <h1>{number}</h1>
                <button onClick={() => {
                    setNumber(number + 5);
                    setNumber(n => n + 1);
                    setNumber(42);
                }}>Increse the number</button>
            </div>
        </>
    );
}