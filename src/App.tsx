import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Icon } from 'semantic-ui-react';

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

      <div className="row">
        <div className="box">
          <div><div className="scoresTopRow gray">Tuesday, Apr 11</div></div>
          <div><Icon loading name='hockey puck' size='huge' /></div>
          <div>Canucks</div>
          <div className="gray">36-37-7</div>
        </div>
        <div className="box">          
          <div>@</div>          
        </div>
        <div className="box">
          <div><div className="empty"></div></div>
          <div><Icon name='rocket' size='huge' /></div>
          <div>Kelowna Rockets</div>
          <div className="gray">23-45-12</div>
        </div>
        <div className="box">
          <div className="empty"></div>
          <div className="empty"></div>
          <div className="scoresTopRow">7:00 PM PT</div>
          <div className="empty"></div>
        </div>
      </div>

      

      <div className="featured-stories-container">
        <div className="column">
          <div className="featured">
            <div className="title">
              <div>FEATURED</div>
            </div>
            <div className="featured-container">
              <div className="tint">
                <img className="featured-picture" src="https://www.sportsnet.ca/wp-content/uploads/2021/05/Connor-McDavid-Auston-Matthews-1040x572.jpg" alt="Italian Trulli" />
              </div>
              <div className="featured-text-container">
                <span className="featured-text featured-text-header">FINAL | Canucks 3 Ducks 2</span>
                <span className="featured-text featured-text-subtitle">Canucks win in on the second night again!</span>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="featured">
            <div className="title">
              <div>STORIES</div>
            </div>
            <div className="featured-container">
              <div className="stories">
                <ol>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ol> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
