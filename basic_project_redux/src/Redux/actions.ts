export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT";

interface IncrementAction {
  type: typeof INCREMENT;
}
interface DecrementAction {
  type: typeof DECREMENT;
}
interface IncrementByAmountAction {
  type: typeof INCREMENT_BY_AMOUNT;
  payload: number;
}
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
export const increment_by_amount = (amount: number) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount,
});

export type ActionType =
  | IncrementAction
  | DecrementAction
  | IncrementByAmountAction;
