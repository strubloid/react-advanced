import Buttons from "./Buttons";
import Display from "./Display";
import "./style.css";
import { CartProvider } from "./provider/CartProvider";

export const OptimizingContextAPIExample = () => {
    return (
        <>
            <CartProvider>
                <Display />
                <Buttons />
            </CartProvider>
        </>
    );
}

