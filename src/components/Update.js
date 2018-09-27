import React, { Component } from "react";
import Dropdown from "react-dropdown";

export class Update extends Component {
  render() {
    const options = ["2018-09-26--revision-005"];
    const defaultOption = options[0];

    return (
      <div className="firmware-updater">
        <div className="current-firmware dp-menu">
          <p>Current firmware version</p>
          <input type="text" defaultValue="2018-08-22--revision-002" />
        </div>

        <div className="firmware-selector dp-menu">
          <p>Select Firmware file</p>
          <Dropdown
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <button>Upload</button>

        <p>
          Check for latest firmware <span className="link">here</span>!
        </p>
      </div>
    );
  }
}

export default Update;
