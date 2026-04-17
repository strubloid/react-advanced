import { useContext } from "react";
import { CartDispatchContext } from "../utils/CartContext";

export function useDispatchContext() {
    const value = useContext(CartDispatchContext);

    if (value === null) {
        throw new Error("Must be wrapped inside Context.Provider");
    }

    return value;
}
