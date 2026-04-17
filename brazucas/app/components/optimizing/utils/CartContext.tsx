import { Dispatch, createContext} from "react";
import { State } from "../types/StateType";

type Action = {
  type: "INCREMENT" | "DECREMENT";
};

type CartContext = {
  state: { count: number };
  dispatch: Dispatch<Action>;
};

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            throw new Error("Provide a valid action.");
    }
}

export const Context = createContext<CartContext | null>(null);
