import React, { JSX, useState } from "react";
import Ads from "../Ads";

export interface PositionType {
  x: number;
  y: number;
  //   visiable: boolean;
}
// export default function MouseTracker() {
//   const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
//   const handleMouseMove = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     setPosition({ x: event.clientX, y: event.clientY });
//   };
//   return (
//     <div onMouseMove={handleMouseMove}>
//       <p>MouseTracker</p>
//       <Ads {...position} />
//     </div>
//   ); //đây là cách chúng ta truyền props vào component con thông thường
// }

export default function MouseTracker({
  children,
}: {
  children: (value: PositionType) => JSX.Element;
}) {
  console.log("re-render");
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <p>Mouse Tracker</p>
      {children(position)}
    </div>
  );
} //đây là cách truyền props theo kiểu render props tức là props chính là một function

//cách sử dụng HOC
// export function withMouseTracker<T>(
//   Component: React.ComponentType<T & PositionType>
// ) {
//   return function (props: any) {
//     const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
//     console.log("re-render");
//     const handleMouseMove = (
//       event: React.MouseEvent<HTMLDivElement, MouseEvent>
//     ) => {
//       setPosition({
//         x: event.clientX,
//         y: event.clientY,
//       });
//     };
//     return (
//       <div onMouseMove={handleMouseMove}>
//         <p>Mouse Tracker</p>
//         <Component {...props} {...position} />
//       </div>
//     );
//   };
// }
