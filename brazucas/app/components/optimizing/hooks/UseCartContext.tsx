import { useContext } from "react";
import { Context } from "../utils/CartContext";

export function useCartContext() {
    const value = useContext(Context);

    if (value === null) {
        throw new Error("Must be wrapped inside Context.Provider");
    }

    return value;
}
