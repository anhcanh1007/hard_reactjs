import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../Redux/store";
import { decrement, increment, increment_by_amount } from "../Redux/actions";

export default function Counter() {
  const stateCounter = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      Counter
      <h1>This is counter: {stateCounter}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment_by_amount(5))}>
          Increment By Amount
        </button>
      </div>
    </div>
  );
}
