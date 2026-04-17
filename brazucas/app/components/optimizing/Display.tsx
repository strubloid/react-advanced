import { useStateContext } from "./hooks/UseStateContext";

const Display = () => {
    const { count } = useStateContext();
    return <span className="span">{count}</span>;
};

export default Display;
