import React, { Component } from "react";

export class TabButton extends Component {
  render() {
    const img = this.props.image;
    const isActive = this.props.active;
    const name = this.props.name;

    const active = isActive ? "active" : "";
    return (
      <div className={`item ${active}`}>
      <div className="item" onClick={() => this.props.activateTab(name)}>
        <img src={`img/${img}`} alt="" />
      </div>
    );
  }
}

export default TabButton;
