import React, { Component } from "react";

class LoginButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>;
  }
}

class LogoutButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Logout</button>;
  }
}

export default class IfElseRender extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggin: false };
  }
  handleLoggin = () => {
    this.setState({ isLoggin: true });
  };
  handleLogout = () => {
    this.setState({ isLoggin: false });
  };
  render() {
    const { isLoggin } = this.state;
    const { hidden } = this.props;
    console.log(this.state);
    if (hidden) return null;
    return (
      <>
        {isLoggin ? (
          <LogoutButton onClick={this.handleLogout} />
        ) : (
          <LoginButton onClick={this.handleLoggin} />
        )}
      </>
    );
  }
}
