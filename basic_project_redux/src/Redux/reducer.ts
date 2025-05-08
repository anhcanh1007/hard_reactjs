import {
  DECREMENT,
  INCREMENT,
  INCREMENT_BY_AMOUNT,
  type ActionType,
} from "./actions";
import { initialState, type StateType } from "./state";

export const counterReducer = (
  state = initialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case INCREMENT_BY_AMOUNT:
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
};
