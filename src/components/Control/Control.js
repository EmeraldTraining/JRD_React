import React from 'react';
import './Control.css';

function Control({name, setName}) {
    return (
        <>
            <h1>Hello, {name}!</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </>
    );
}

export default Control;
