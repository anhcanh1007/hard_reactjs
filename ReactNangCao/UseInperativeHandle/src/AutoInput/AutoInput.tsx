import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react";

interface RefType {
  focus: () => void;
  clear: () => void;
}
const Input = forwardRef((props, ref: Ref<RefType>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current?.focus();
      },
      clear: () => {
        if (inputRef.current) inputRef.current.clear = "nguyen tuan anh";
      },
    };
  });

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default function AutoInput() {
  const newRef = useRef<RefType>(null);
  return (
    <div>
      <Input ref={newRef} />
      <div>
        <button onClick={() => newRef.current?.focus()}>Focus</button>
        <button onClick={() => newRef.current?.clear}>Clear</button>
      </div>
    </div>
  );
}
