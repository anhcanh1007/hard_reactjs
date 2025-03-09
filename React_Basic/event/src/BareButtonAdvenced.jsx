import React from "react";

class BareButtonAdvenced extends React.Component {
  handleClick(event, value) {
    console.log(event);
    console.log(value);
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this, null, "add")}>Add</button>
        <button onClick={(e) => this.handleClick(e, "Edit")}>Edit</button>
        <button onClick={(e) => this.handleClick(e, "Delete")}>Delete</button>
      </>
    );
  }
}

export default BareButtonAdvenced;
