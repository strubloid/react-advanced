import { Dispatch } from "react";
import { Action } from "./ActionType";

export type CartContext = {
  state: { count: number };
  dispatch: Dispatch<Action>;
};
