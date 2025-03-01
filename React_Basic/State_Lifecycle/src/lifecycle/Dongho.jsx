import React from "react";

export default class Dongho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      seconds: new Date().toTimeString(),
      darkMode: false,
    };
  }

  getTime = () => {
    this.setState({
      ...this.state,
      time: new Date().toLocaleTimeString(),
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      document.getElementById("didmout").innerHTML = "anh canh dang didmout";
    }, 2000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  toggleDarkMode = () => {
    this.setState((prevSate) => ({
      ...prevSate,
      darkMode: !prevSate.darkMode,
    }));
  };

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h1>Anh Fighting</h1>
        <h2>It is {this.state.time}</h2>
        <h2>Giay nay: {this.state.seconds}</h2>
        <h3 id="didmout"></h3>
        <div>
          <button onClick={this.getTime}>Change Time</button>
        </div>
        <div>
          <button onClick={this.toggleDarkMode}>Toggle</button>
        </div>
      </div>
    );
  }
}
