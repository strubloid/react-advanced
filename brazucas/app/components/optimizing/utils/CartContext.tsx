import { createContext } from "react";
import { State } from "../types/StateType";
import { Action } from "../types/ActionType";
import type { StateContext } from "../types/StateContext";
import { DispatchContext } from "../types/DispatchContext";

/**
 * Context reducer function that will be handling stage of changes
 * based on the type of action passed to it.
 * @param state - the current state of the context
 * @param action - the action to be performed on the state
 * @returns the new state after applying the action
 */
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

// creating the context for the cart state and dispatch function
export const CartStateContext = createContext<StateContext | null>(null);

// creating the context for the cart dispatch function
export const CartDispatchContext  = createContext<DispatchContext | null>(null);
