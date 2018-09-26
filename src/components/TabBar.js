import React, { Component } from "react";
import TabButton from "./TabButton";
// import App from "./App";

export class TabBar extends Component {
  render() {
    const activeTab = this.props.activeTab;
    function isActive(tab) {
      return activeTab === tab;
    }

    return (
      <div className="tabBar">
        <div className="logo">
          <img src="/img/dygma-logo.svg" alt="" />
        </div>
        <TabButton
          image="ic_keyboard_white_24px.svg"
          active={isActive("keymap")}
          activateTab={this.props.activateTab}
          name="keymap"
        />
        <TabButton
          image="ic_color_lens_white_24px.svg"
          active={isActive("led")}
          activateTab={this.props.activateTab}
          name="led"
        />
        <TabButton
          image="ic_settings_white_24px.svg"
          active={isActive("settings")}
          activateTab={this.props.activateTab}
          name="settings"
        />
      </div>
    );
  }
}

export default TabBar;
