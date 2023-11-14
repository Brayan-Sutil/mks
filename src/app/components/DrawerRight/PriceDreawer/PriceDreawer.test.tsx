import { render } from "@testing-library/react";
import PriceDreawer from "./PriceDreawer";

describe("PriceDreawer", () => {
    it("should render without errors", () => {
        const { getByTestId } = render(<PriceDreawer />);
        expect(getByTestId("price-drawer")).toBeInTheDocument();
    });

    it("should render the correct title", () => {
        const { getByText } = render(<PriceDreawer />);
        expect(getByText("Preço")).toBeInTheDocument();
    });

    it("should render the correct price", () => {
        const { getByText } = render(<PriceDreawer />);
        expect(getByText("R$ 0,00")).toBeInTheDocument();
    });

    it("should match the snapshot", () => {
        const { container } = render(<PriceDreawer />);
        expect(container).toMatchSnapshot();
    });
});
