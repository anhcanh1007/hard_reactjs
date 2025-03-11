import PropTypes from "prop-types";
import React, { Component } from "react";

export class Temperature extends Component {
  changeTemperature = (event) => {
    this.props.handleChangeTemperature(event.target.value);
  };
  render() {
    const { title, temperature } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {title}</legend>
        <input
          type="text"
          value={temperature}
          onChange={this.changeTemperature}
        />
      </fieldset>
    );
  }
}

Temperature.PropTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  temperature: PropTypes.number.isRequired,
  handleChangeTemperature: PropTypes.func,
};
export default Temperature;
