import PropTypes from "prop-types";
import React, { Component } from "react";

export class HotWater extends Component {
  render() {
    return (
      <h2>
        {this.props.celsius >= 100
          ? "The water is boild"
          : "The water is not boild"}
      </h2>
    );
  }
}

HotWater.PropTypes = {
  celsius: PropTypes.number.isRequired,
};

export default HotWater;
