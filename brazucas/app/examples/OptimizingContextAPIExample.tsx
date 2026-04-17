import Buttons from "../components/optimizing/Buttons";
import Display from "../components/optimizing/Display";
import "../components/optimizing/style.css";
import { CartProvider } from "../components/optimizing/provider/CartProvider";

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

