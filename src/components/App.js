import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="window">
        <div className="logo">
          <img className="symbol" src="/img/dygma-logo.svg" alt="" />
        </div>
        <div className="sidebar">
          <div className="tab item selected" onclick="openTab(event, 'keys')">
            <img
              className="symbol"
              src="/img/ic_keyboard_white_24px.svg"
              alt=""
            />
          </div>
          <div className="tab item" onclick="openTab(event, 'leds')">
            <img
              className="symbol"
              src="/img/ic_color_lens_white_24px.svg"
              alt=""
            />
          </div>
          <div className="tab item" onclick="openTab(event, 'settings')">
            <img
              className="symbol"
              src="/img/ic_settings_white_24px.svg"
              alt=""
            />
          </div>
        </div>

        <div className="tabcontent" id="keys">
          <div className="title">
            <h1>Key Configuration</h1>
            <p>Customise your keymap</p>
          </div>
          <div className="modules">
            <div className="item">
              <h2>Control 1</h2>
              <div className="control-content" />
            </div>
            <div className="item">
              <h2>Control 2</h2>
              <div className="control-content" />
            </div>
          </div>
          <div className="feedback">
            <img src="/img/dygma-raise.svg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
