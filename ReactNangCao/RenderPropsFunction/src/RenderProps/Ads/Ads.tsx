import React from "react";
import { PositionType, withMouseTracker } from "../MouseTracker/MouseTracker";
export default function Ads({ x, y }: PositionType) {
  //đây là cách dùng thông thường

  return (
    <div>
      <img
        src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg"
        alt=""
      />
      <div>
        <h1>Position Mouse</h1>
        <ul>
          <li>x: {x}</li>
          <li>y: {y}</li>
        </ul>
      </div>
    </div>
  );
}

// export default withMouseTracker(Ads);
