import React, { Component } from "react";

export class Tab extends Component {
  render() {
    return (
      <div className="tab">
        <div className="top-bar">
          <div className="title">
            <h1>Keymap Editor</h1>
            <p>Configure your keymap</p>
          </div>
          <div className="top-controls">
            <h1>Top Controls</h1>
          </div>
        </div>
        <div className="tab-contents">
          <h1>Tab Contents</h1>
        </div>
      </div>
    );
  }
}

export default Tab;
