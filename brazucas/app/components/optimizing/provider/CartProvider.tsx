import { useReducer} from "react";
import { Context, reducer } from "../utils/CartContext";

// this is the props for the cart provider component
type CartProviderProps = {
    children: React.ReactNode;
}

/**
 * This is a way to remove the useReducer from the main component and
 * put it in a provider component, so we can use the context API to share
 *  the state and dispatch function
 * @param children - the children of the provider component
 * @returns the provider component
 */
export const CartProvider = ({ children }: CartProviderProps) => {

    // starting the reducer with the initial state of count: 0
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <Context.Provider value={{ state, dispatch }}>
                {children}
            </Context.Provider>
        </>

    );
};
