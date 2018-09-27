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
          image="ic_settings_input_composite_white_24px.svg"
          active={isActive("plugins")}
          activateTab={this.props.activateTab}
          name="plugins"
        />
        <TabButton
          image="ic_update_white_24px.svg"
          active={isActive("update")}
          activateTab={this.props.activateTab}
          name="update"
        />
        <TabButton
          image="ic_import_export_white_24px.svg"
          active={isActive("import-export")}
          activateTab={this.props.activateTab}
          name="import-export"
        />
      </div>
    );
  }
}

export default TabBar;
