import React from 'react';
// rsc - hotkey
const Counter = ({counts, setCounts}) => {

    function plus() {
        setCounts(counts + 1)
    }
    function minus() {
        setCounts(counts - 1)
    }
    function reset() {
        setCounts(0)
    }

    return (
        <div>

            <h2>Counter {counts}</h2>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
            <button onClick={reset}>Reset</button>

        </div>
    );
};

export default Counter;
