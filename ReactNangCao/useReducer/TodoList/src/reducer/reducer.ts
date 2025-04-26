import { ActionType } from "./actions";

export const initalState = { age: 26 };

export const init = (baseState: typeof initalState) => {
  return { ...baseState, age: baseState.age + 4 };
};

const reducer = (state: typeof initalState, action: ActionType) => {
  switch (action.type) {
    case "increment_age":
      return { ...state, age: state.age + 1 };
    case "descrement_age":
      return { ...state, age: state.age - 1 };
    case "increment_x_age":
      return { ...state, age: state.age + action.payload };
    default:
      throw Error("invalid action", action);
  }
};

export const log = () => {
  return (state: typeof initalState, action: ActionType) => {
    console.group(action.type);
    console.log("previous", state);
    const nextState = reducer(state, action);
    console.log("next state", nextState);
    console.groupEnd();
    return nextState;
  };
};
export default reducer;
