import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainApp} from './main.js'
function Meh(){
  return (
    <p>govno</p>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainApp />
        <Meh />
      </header>
    </div>
  );
}

export default App;
