import { Button } from "./Composition";

export const PartialComponent = (Component : React.ComponentType<any>, partialProps : any) => {
    return (props : any) => {
        return <Component {...partialProps} {...props} />
    }
}

// first we create a partial red one
export const RedButton = PartialComponent(Button, {color: "red"});

// from the red we just make it small
export const SmallRedButton = PartialComponent(RedButton, {size: "small"});

// with the small red button we can have another one with a different color, keeping the size small from the smallRedButton
export const GreenSmallButton = PartialComponent(SmallRedButton, {color: "yellowgreen"});  