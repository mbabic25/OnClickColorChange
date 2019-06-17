import React, { Component } from "react";

class Zadatak extends Component {
  state = {
    colors: ["#000"]
  };
  getUserAsync = async () => {
    let response = await fetch(`http://www.colr.org/json/color/random`);
    let data = await response.json();
    let newColor = data.new_color;
    this.setState({ colors: [...this.state.colors, `#${newColor}`] });
    console.log("data", data);
    console.log("new state", this.state.colors);
  };

  render() {
    const lastColor = this.state.colors[this.state.colors.length - 1];

    return (
      <div className="App">
        <div
          className="button"
          style={{ color: lastColor }}
          onClick={this.getUserAsync}
        >
          COMPONENT
        </div>
      </div>
    );
  }
}

export default Zadatak;
