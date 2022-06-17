import React from 'react';
import Control from '../Control/Control';
import logo from '../../logo.svg';
import './App.css';

function App() {
  const [name, setName] = React.useState("World");

   return (
    <div className="App">
      <header className="App-header">
        <h1>Your name is {name.length} characters long.</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Control name={name} setName={setName}/>
      </header>
    </div>
  );
}

export default App;
