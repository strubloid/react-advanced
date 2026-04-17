import styles from "./Button.module.css";

type ButtonProps = {
    size?: "s" | "m" | "l" | "xl";
    As?: React.ElementType;
    href?: string;
} & React.ComponentPropsWithoutRef<"button">;

const Button = ({
    As = "button",
    size = "m",
    className = "",
    ...otherProps }: ButtonProps) => {

    // we are using the As prop to render the button as an anchor tag, so we need to pass the href prop to the anchor tag
    return <As {...otherProps} className={`${styles.button} ${styles[size]} ${className}`} />;
};

export default Button;
