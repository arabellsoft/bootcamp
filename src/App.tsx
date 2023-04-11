import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Vancouver Canucks
        </p>
      </header>
      <p className="title">
        Scores Preview 
      </p>

      <div className="flexContainer">
        <div className="row">
          <div className="flexItem">Friday, Mar 31</div>
          <div className="flexItem">Logo</div>
          <div className="flexItem">Flames</div>
          <div className="flexItem">32-26-15</div>
        </div>
      </div>
    </div>
  );
}

export default App;
