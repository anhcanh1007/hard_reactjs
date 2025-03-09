import React from "react";

class BareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    //khi gọi hàm trong class component phải dùng bind(this) vì vấn đề trong js không tự gán this cho instance của class , mà nó sẽ làm mất ngữ cảnh this của class, nên đề fix cần bind this, nó sẽ luôn trỏ đến instance của class
    this.handeClick = this.handeClick.bind(this);
  }

  //   handeClick() {
  //     //trong setState thay vì set trực tiếp giá trị của state thì truyền vào một callback với tham số prev, ở đây prev là một bản sao của state, nhưng giá trị của nó là giá trị trước đó của state
  //     this.setState((prev) => ({
  //       isToggleOn: !prev.isToggleOn,
  //     }));
  //   }

  handeClick = () => {
    this.setState((prev) => ({
      isToggleOn: !prev.isToggleOn,
    }));
  };

  render() {
    return (
      <>
        <button onClick={this.handeClick}>
          {this.state.isToggleOn ? "On" : "Off"}
        </button>
      </>
    );
  }
}

export default BareButton;
