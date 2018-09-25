import React, { Component } from "react";

export class TabButton extends Component {
  render() {
    const img = this.props.image;
    const isActive = this.props.active;

    const active = isActive ? "active" : "";

    return (
      <div className={`item ${active}`}>
        <img src={`img/${img}`} alt="" />
      </div>
    );
  }
}

export default TabButton;
