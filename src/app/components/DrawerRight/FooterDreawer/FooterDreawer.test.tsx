import { render } from "@testing-library/react";
import FooterDreawer from "./FooterDreawer";
import { FooterBotton } from "./styled";

describe("FooterDreawer", () => {
    it("should render correctly", () => {
        const { getByTestId } = render(<FooterDreawer />);
        expect(getByTestId("footer-drawer")).toBeInTheDocument();
    });

    it("should render children correctly", () => {
        const { getByTestId } = render(
            <FooterDreawer>
                <div data-testid="child-1" />
                <div data-testid="child-2" />
            </FooterDreawer>
        );
        expect(getByTestId("child-1")).toBeInTheDocument();
        expect(getByTestId("child-2")).toBeInTheDocument();
    });
});

describe("FooterBotton", () => {
    it("should apply CSS properties correctly", () => {
        const { getByTestId } = render(
            <FooterBotton data-testid="footer-button" />
        );
        const footerButton = getByTestId("footer-button");
        expect(footerButton).toHaveStyle("background-color: #fff");
        expect(footerButton).toHaveStyle("color: #000");
        expect(footerButton).toHaveStyle("border: 1px solid #000");
    });
});
