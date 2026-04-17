import { useContext } from "react";
import { CartStateContext } from "../utils/CartContext";

export function useStateContext() {
    const value = useContext(CartStateContext);

    if (value === null) {
        throw new Error("Must be wrapped inside Context.Provider");
    }

    return value;
}
