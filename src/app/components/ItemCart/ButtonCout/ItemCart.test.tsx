import { render, screen, fireEvent } from "@testing-library/react";
import ItemCart from "../ItemCart";

describe("ItemCart", () => {
    const mockOnClick = jest.fn();
    const mockNameItem = "Test Item";
    const mockPriceItem = "10.00";
    const mockPhotoItem = "https://example.com/test.jpg";

    beforeEach(() => {
        render(
            <ItemCart
                onclick={mockOnClick}
                nameItemCart={mockNameItem}
                priceItemCart={mockPriceItem}
                photoItemCart={mockPhotoItem}
            />
        );
    });

    it("should render the item name", () => {
        const itemName = screen.getByText(mockNameItem);
        expect(itemName).toBeInTheDocument();
    });

    it("should render the item price", () => {
        const itemPrice = screen.getByText(mockPriceItem);
        expect(itemPrice).toBeInTheDocument();
    });

    it("should render the item photo", () => {
        const itemPhoto = screen.getByAltText(mockNameItem);
        expect(itemPhoto).toHaveAttribute("src", mockPhotoItem);
    });

    it("should call the onClick function when the close button is clicked", () => {
        const closeButton = screen.getByRole("button", { name: "Close" });
        fireEvent.click(closeButton);
        expect(mockOnClick).toHaveBeenCalled();
    });
});
