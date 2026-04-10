import { render, screen } from "@testing-library/react";
import Home from "./page";

/**
 * Basic smoke test to verify that the main app renders
 * without throwing an error.
 */
describe("Home", () => {
    it("renders", () => {
        render(<Home />);
        expect(screen.getByText("Brazucas")).toBeInTheDocument();
    });
});
