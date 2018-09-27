import React, { Component } from "react";
import Dropdown from "react-dropdown";

export class PluginPicker extends Component {
  render() {
    const options = ["My Macro", "↳ New"];
    const defaultOption = options[0];
    return (
      <div className="layer-controls">
        <img className="del-macro" src="img/delete_white_24px.svg" alt="" />
        <div className="layer-select dp-menu macro-select">
          <p>Macro</p>
          <Dropdown
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <div className="layer-name dp-menu macro-name">
          <p>Macro Name</p>
          <input type="text" defaultValue="My Macro" />
        </div>

        <div className="plugin-controls">
          <div className="plugin-select dp-menu">
            <p>Plugin</p>
            <Dropdown
              options={options}
              onChange={this._onSelect}
              value={defaultOption}
              placeholder="Select an option"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PluginPicker;
