import React, { Component } from "react";

export class UncontrollerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.fileInput = React.createRef();
    this.state = {
      selectedFile: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append(
      "myData",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    axios.post("api/uploadFile", formData);
  };

  handleImage = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  //dùng ref để lấy các giá trị của input, tương tự với dùng getElementById;
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Name</label>

          <input type="text" ref={this.input} defaultValue="anh canh" />
          <input type="file" ref={this.fileInput} onChange={this.handleImage} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default UncontrollerComponent;
