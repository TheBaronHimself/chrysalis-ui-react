import React from "react";
import TabBar from "./TabBar";

class App extends React.Component {
  state = {
    activeTab: "keymap"
  };

  activateTab = tab => {
    var activeTab = { ...this.state.activeTab };
    activeTab = tab;
    this.setState({ activeTab: activeTab });
  };

  render() {
    return (
      <div className="window">
        <TabBar
          activeTab={this.state.activeTab}
          activateTab={this.activateTab}
        />
      </div>
    );
  }
}

export default App;
