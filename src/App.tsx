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
        <div className="scoresTopRow gray">Tuesday, Apr 11</div>
        <div className="scoresBottomRow">
          <div className="scoreItem">Logo</div>
          <div className="scoreItem">Canucks</div>
          <div className="scoreItem gray">36-37-7</div>
        </div>
      </div>

    </div>
  );
}

export default App;
