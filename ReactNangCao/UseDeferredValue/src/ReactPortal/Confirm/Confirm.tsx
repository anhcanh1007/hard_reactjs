import React from "react";
import { createPortal } from "react-dom";

interface ConfirmProps {
  visiable: boolean;
}
const newbody = document.body; //cho component mà chúng ta muốn hiển thị nằm cùng cấp với root
const eleRoot = document.getElementById("root") as Element; //cho component mà chúng ta muốn hiển thị nằm trong root
export default function Confirm(props: ConfirmProps) {
  const { visiable } = props;
  return createPortal(
    <>
      {visiable && (
        <div className="flex items-center justify-between">
          <div className="min-w-[300px] bg-red-300">
            <h1 className="text-center">Are you sure?</h1>
            <div className="flex justify-around">
              <button className="bg-amber-200 p-4 rounded-2xl">Yes</button>
              <button className="bg-amber-200 p-4 rounded-2xl">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>,
    eleRoot
  );
}
