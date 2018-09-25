import React, { Component } from "react";

export class TabBar extends Component {
  render() {
    return (
      <div className="tabBar">
        <div className="logo">
          <img src="/img/dygma-logo.svg" alt="" />
        </div>

        <div className="item selected">
          <img src="/img/ic_keyboard_white_24px.svg" alt="" />
        </div>
        <div className="item">
          <img src="/img/ic_color_lens_white_24px.svg" alt="" />
        </div>
        <div className="item">
          <img src="/img/ic_settings_white_24px.svg" alt="" />
        </div>
      </div>
    );
  }
}

export default TabBar;
