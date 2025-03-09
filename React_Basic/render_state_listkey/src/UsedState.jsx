import React, { Component } from "react";

export default class UsedState extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}
