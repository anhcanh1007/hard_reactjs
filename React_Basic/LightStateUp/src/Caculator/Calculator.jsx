import React, { Component } from "react";
import Temperature from "./Temperature";
import HotWater from "./HotWater";

const scales = {
  c: "Celsius",
  f: "Fahrenheit",
};

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8;
};
const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

const tryConveter = (temperature, convertFunc) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  let output = convertFunc(input);
  output = Math.round(output * 1000) / 1000;
  return output;
};

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }
  handleChangeTemperature = (scale) => (value) => {
    this.setState({
      temperature: value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? tryConveter(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConveter(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <Temperature
          title={scales.c}
          temperature={celsius}
          handleChangeTemperature={this.handleChangeTemperature("c")}
        />
        <Temperature
          title={scales.f}
          temperature={fahrenheit}
          handleChangeTemperature={this.handleChangeTemperature("f")}
        />
        <HotWater celsius={Number(celsius)} />
      </div>
    );
  }
}

export default Calculator;
