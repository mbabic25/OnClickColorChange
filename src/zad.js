import React, { Component } from "react";

class Zadatak extends Component {
  state = {
    colors: ["#000000"],
    value: ""
  };
  getColorsAsync = async () => {
    let response = await fetch(`http://www.colr.org/json/color/random`);
    let data = await response.json();
    let newColor = data.new_color;
    if (newColor)
      this.setState({ colors: [`#${newColor}`, ...this.state.colors] });
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const lastColor = this.state.colors[0];

    return (
      <div className="App">
        <input
          className="input-field"
          type="text"
          placeholder="Change text..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div
          className="button"
          style={{ color: lastColor }}
          onClick={this.getColorsAsync}
        >
          {this.state.value ? this.state.value : "CLICK ME"}
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
