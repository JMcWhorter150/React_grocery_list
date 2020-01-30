import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grocery from './Grocery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Grocery thing1="Milk" thing2="Beer" thing3="Eggs" />
      </header>
    </div>
  );
}

export default App;
