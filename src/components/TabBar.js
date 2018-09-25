import React, { Component } from "react";
import TabButton from "./TabButton";

export class TabBar extends Component {
  render() {
    return (
      <div className="tabBar">
        <div className="logo">
          <img src="/img/dygma-logo.svg" alt="" />
        </div>
        <TabButton image="ic_keyboard_white_24px.svg" active={false} />
        <TabButton image="ic_color_lens_white_24px.svg" active={true} />
        <TabButton image="ic_settings_white_24px.svg" active={false} />
      </div>
    );
  }
}

export default TabBar;
