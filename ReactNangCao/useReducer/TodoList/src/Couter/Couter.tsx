import React, { useReducer } from "react";
import reducer, { init, initalState, log } from "../reducer/reducer";
import {
  descrementActionAge,
  incrementActionAge,
  incrementXActionAge,
} from "../reducer/actions";

export default function Couter() {
  //   const [state, dispatch] = useReducer(reducer, initalState, init);
  //   const [state, setState] = useState<{ age: number }>({ age: 25 });
  const [state, dispatch] = useReducer(log(), initalState, init);

  const increment_age = () => {
    dispatch(incrementActionAge());
  };
  const descrement_age = () => {
    dispatch(descrementActionAge());
  };
  const increment_x_age = (value: number) => {
    dispatch(incrementXActionAge(value));
  };
  return (
    <div className="flex flex-col text-2xl max-w-[300px] text-center">
      <div className="flex gap-2">
        <button onClick={increment_age} className="bg-amber-100 p-2">
          IncreamentAge
        </button>
        <button onClick={descrement_age} className="bg-amber-100 p-2">
          DescreamentAge
        </button>
        <button onClick={() => increment_x_age(3)} className="bg-amber-100 p-2">
          IncreamentXAge
        </button>
      </div>
      <h1 className="text-center text-blue-900">Hello Anh canh: {state.age}</h1>
    </div>
  );
}
