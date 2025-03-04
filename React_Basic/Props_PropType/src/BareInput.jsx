import React from "react";
import PropTypes from "prop-types";
//cách dùng props

// class BareInput extends React.Component {
//   render() {
//     return (
//       <>
//         <input {...this.props} />
//       </>
//     );
//   }
// }

class BareInput extends React.Component {
  render() {
    const { type: typeInput, ...rest } = this.props;
    return (
      <>
        <input {...rest} type={typeInput} />
      </>
    );
  }
}

// function BareInput(props) {
//   return (
//     <>
//       <input {...props} />
//     </>
//   );
// }

// function BareInput({ type, ...rest }) {
//   return (
//     <>
//       <input {...rest} />
//     </>
//   );
// }

//cách kiểm tra dữ liệu đầu vào của props
BareInput.PropTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export default BareInput;
