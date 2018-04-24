import React, { Component } from 'react';
import '../styles/AppFrame.css';

class AppFrame extends Component {
  render() {
    return (
      <div className="AppFrame">
       <div id="title-bar">
        <div id="title">Ochui Ftp</div>
        <div id="title-bar-btns">
            <button id="min-btn">-</button>
            <button id="max-btn">+</button>
            <button id="close-btn"className = "close">x</button>
        </div>
    </div>
      </div>
    );
  }
}

export default AppFrame;
