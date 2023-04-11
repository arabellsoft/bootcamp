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

      <div className="scores">
        <div className="one flexItemGray">Tuesday, Apr 11</div>
        <div className="two">
          <div className="twoItem">Logo</div>
          <div className="twoItem">Canucks</div>
          <div className="twoItem flexItemGray">36-37-7</div>
        </div>
      </div>

    </div>
  );
}

export default App;
