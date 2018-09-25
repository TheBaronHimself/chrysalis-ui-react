import React, { Component } from "react";

export class TabBar extends Component {
  render() {
    return (
      <div className="tabBar">
        <div className="logo">
          <img className="symbol" src="/img/dygma-logo.svg" alt="" />
        </div>

        <div className="item selected" onclick="openTab(event, 'keys')">
          <img
            className="symbol"
            src="/img/ic_keyboard_white_24px.svg"
            alt=""
          />
        </div>
        <div className="item" onclick="openTab(event, 'leds')">
          <img
            className="symbol"
            src="/img/ic_color_lens_white_24px.svg"
            alt=""
          />
        </div>
        <div className="item" onclick="openTab(event, 'settings')">
          <img
            className="symbol"
            src="/img/ic_settings_white_24px.svg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default TabBar;
