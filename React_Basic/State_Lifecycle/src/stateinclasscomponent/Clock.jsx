import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      seconds: new Date().toTimeString(),
    };
  }

  getTime = () => {
    const newState = {
      ...this.state,
      time: new Date().toLocaleTimeString(),
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h1>Cố lên Anh ơi</h1>
        <h2>{this.state.time}</h2>
        <h3>{this.state.seconds}</h3>
        <div>
          <button onClick={this.getTime}>Change Time</button>
        </div>
      </div>
    );
  }
}

export default Clock;
