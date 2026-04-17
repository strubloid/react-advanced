import Button from "../components/demoElementProp/Button";

// If you need to use styles, needs to have this type React.CSSProperties
const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
};

export const ElementPropExample = () => {
    return (
        <div style={style}>
            <Button size="s">Small</Button>
            <Button size="m">Medium</Button>
            <Button size="l">Large</Button>
            <Button size="xl">xLarge</Button>

            {/* This is the button that we are creating the As prop for the button component render as an anchor tag */}
            <Button As="a" size="xl" href="/">link</Button>
        </div>
    );
}
