import { createContext, useContext, ReactNode } from "react";

type CardContextType = {
  info: String;
};

// creating a context for the card component to share data between the header, body and footer
const Context = createContext<CardContextType | null>(null);

/**
 * This will be building the body of the card.
 * @param {children} - The children to be displayed in the body.
 * @returns A body component.
 */
const Body = ({ children }: { children: ReactNode }) => {
  return <div style={{ padding: ".5rem" }}>{children}</div>;
};

/**
 * This will be building the header of the card,
 * it will be using the context to get the test value and display it in the header.
 * @param {children} - The children to be displayed in the header.
 * @returns A header component with optional context value.
 */
const Header = ({ children }: { children: ReactNode }) => {

    // loading the context value to be used in the header
    const context = useContext(Context);

    return (
        <div style={{
            borderBottom: "1px solid black",
            padding: ".5rem",
            marginBottom: ".5rem",
        }}>
            {children}
            {context?.info}
        </div>
    );
};

/**
 * This will be building the footer of the card.
 * @param {children} - The children to be displayed in the footer.
 * @returns A footer component.
 */
const Footer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        borderTop: "1px solid black",
        padding: ".5rem",
        marginTop: ".5rem",
      }}
    >
      {children}
    </div>
  );
};

// Type of the request for making the card component
type TypeCardComponent = { header?: ReactNode; footer?: ReactNode; children?: ReactNode; info?: ReactNode };

/**
 * Card component that can have an optional header, footer, and children.
 * @param {header, footer, children} - An object containing optional header, footer, and children for the card.
 * @returns A card component with optional header and footer.
 */
const Card = ({ children, info }: TypeCardComponent) => {
  return (
    <Context.Provider value={{ info : "I am being added by parameter" }}>
        <div style={{border: "1px solid black" }}>{children}</div>
    </Context.Provider>
    );
};

export default Card;

// attaching the header, body and footer to the card component as static properties
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
