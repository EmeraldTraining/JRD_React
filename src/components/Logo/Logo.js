import React from 'react';
import logo from '../../logo.svg';
import './Logo.css';

function Logo({ letters }) {
    return (
        <ul>
            {letters.split('').map(letter => {
                return (<li>
                    <img src={logo} className="App-logo" alt="logo" />
                </li>);
            })}
        </ul>
    );
}

export default Logo;
