import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      textareaName: "",
      checkboxName: true,
      selectName: "xoai",
    };
  }
  handleName = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value, //đây là computed property trong es6, dùng [name] để nó tự động cập nhật state theo name được đặt trong input
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="form-control">
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <input
              name="name"
              value={this.state.name}
              type="text"
              onChange={this.handleName}
            />
          </div>
          <br />
          <div>
            <textarea
              name="textareaName"
              value={this.state.textareaName}
              type="text"
              onChange={this.handleName}
            />
          </div>
          <br />
          <div>
            <input
              name="checkboxName"
              checked={this.state.checkboxName}
              type="checkbox"
              onChange={this.handleName}
            />
          </div>
          <br />
          <div>
            <select
              name="selectName"
              id=""
              value={this.state.selectName}
              onChange={this.handleName}
            >
              <option value="cam">Cam</option>
              <option value="xoai">Xoai</option>
              <option value="mangcut">Mang cut</option>
            </select>
          </div>
          <br />
          <div>
            <button>Subnmit</button>
          </div>
        </form>
      </div>
    );
  }
}
