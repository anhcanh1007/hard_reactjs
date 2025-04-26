export type ActionType = IncreamentAge | DescreamentAge | IncreamentXAge;
export type IncreamentAge = { type: "increment_age" };
export type DescreamentAge = { type: "descrement_age" };
export type IncreamentXAge = { type: "increment_x_age"; payload: number };
export const incrementActionAge = () => {
  return { type: "increment_age" } as IncreamentAge;
};
export const descrementActionAge = () => {
  return { type: "descrement_age" } as DescreamentAge;
};
export const incrementXActionAge = (payload: number) => {
  return { type: "increment_x_age", payload } as IncreamentXAge;
};
