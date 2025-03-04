import React from "react";
import PropTypes from "prop-types";

//cách dùng props children

// class Layout extends React.Component {
//   render() {
//     return (
//       <>
//         <div className="layout">{this.props.children}</div>
//       </>
//     );
//   }
// }

function Layout({ children }) {
  return (
    <>
      <div className="layout">{children}</div>
    </>
  );
}

//kiểm tra dữ liệu đầu vào của props children
Layout.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Layout;
