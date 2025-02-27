import React from "react";

//props là một object được truyền vào component, vì nó là object nên nó có thể có nhiều key đi kèm cùng là giá trị

//functional component
// function Welcome(props) {
//   return <h1>Hello {props.name}</h1>;
// }

//clas component
class Welcome extends React.Component {
  render() {
    return (
      <>
        <h1>hello {this.props.name}</h1>
        <h2>age {this.props.age}</h2>
      </>
    );
  }
}

export default Welcome;
