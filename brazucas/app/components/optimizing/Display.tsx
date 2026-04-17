import { useCartContext } from "./hooks/UseCartContext";

const Display = () => {
    const {
        state: { count },
    } = useCartContext();
    return <span className="span">{count}</span>;
};

export default Display;
