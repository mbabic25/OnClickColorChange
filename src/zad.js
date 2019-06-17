import React, { Component } from "react";

class Zadatak extends Component {
  state = {
    colors: ["#000000"]
  };
  getUserAsync = async () => {
    let response = await fetch(`http://www.colr.org/json/color/random`);
    let data = await response.json();
    let newColor = data.new_color;
    this.setState({ colors: [`#${newColor}`, ...this.state.colors] });
    console.log("data", data);
    console.log("new state", this.state.colors);
  };

  render() {
    const lastColor = this.state.colors[0];

    return (
      <div className="App">
        <div
          className="button"
          style={{ color: lastColor }}
          onClick={this.getUserAsync}
        >
          COMPONENT
        </div>
        {this.state.colors.length > 1 ? (
          <div className="previous-text-color-text">PREVIOUS TEXT COLORS:</div>
        ) : null}
        {this.state.colors.map((color, index) => {
          if (index !== 0)
            return (
              <div className="color-text" style={{ color: color }}>
                {color}
              </div>
            );
        })}
      </div>
    );
  }
}

export default Zadatak;
