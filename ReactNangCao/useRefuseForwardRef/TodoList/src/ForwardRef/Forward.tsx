import React, { useRef } from "react";

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <h1 {...props} ref={ref}>
        anh canh
      </h1>
    </div>
  );
});
export default function Forward() {
  const h1Ref = useRef<any>(null);
  const handle = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = "red";
    }
  };
  return (
    <div>
      <h1>Forward Ref</h1>
      <CustomInput ref={h1Ref} />
      <button onClick={handle}>Click</button>
    </div>
  );
}
