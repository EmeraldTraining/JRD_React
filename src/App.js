import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = React.useState("World");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, {name}!</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
