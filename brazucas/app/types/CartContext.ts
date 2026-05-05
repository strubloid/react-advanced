import { Dispatch } from "react";
import { Action } from "../components/shopping/types/ActionType";

export type CartContext = {
  state: { count: number };
  dispatch: Dispatch<Action>;
};
