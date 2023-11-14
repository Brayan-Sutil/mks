import { render, screen, fireEvent } from "@testing-library/react";
import ItemBox from "./ItemBox";

describe("ItemBox", () => {
    const itemName = "Test Item";
    const description = "This is a test item";
    const photo = "https://via.placeholder.com/150";
    const price = "10.00";
    const onclick = jest.fn();

    it("renders the item name", () => {
        render(<ItemBox itemName={itemName} description={description} photo={photo} price={price} onclick={onclick} />);
        const itemNameElement = screen.getByText(itemName);
        expect(itemNameElement).toBeInTheDocument();
    });

    it("renders the item description", () => {
        render(<ItemBox itemName={itemName} description={description} photo={photo} price={price} onclick={onclick} />);
        const descriptionElement = screen.getByText(description);
        expect(descriptionElement).toBeInTheDocument();
    });

    it("renders the item photo", () => {
        render(<ItemBox itemName={itemName} description={description} photo={photo} price={price} onclick={onclick} />);
        const photoElement = screen.getByAltText("Item");
        expect(photoElement).toBeInTheDocument();
        expect(photoElement).toHaveAttribute("src", photo);
    });

    it("renders the item price", () => {
        render(<ItemBox itemName={itemName} description={description} photo={photo} price={price} onclick={onclick} />);
        const priceElement = screen.getByText(`R$${price}`);
        expect(priceElement).toBeInTheDocument();
    });

    it("calls the onclick function when the button is clicked", () => {
        render(<ItemBox itemName={itemName} description={description} photo={photo} price={price} onclick={onclick} />);
        const buttonElement = screen.getByText("COMPAR");
        fireEvent.click(buttonElement);
        expect(onclick).toHaveBeenCalled();
    });
});
