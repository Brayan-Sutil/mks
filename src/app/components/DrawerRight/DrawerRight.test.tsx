/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MksContext from "@/app/Context/MksContext";
import DrawerRight from "./DrawerRight";

const customRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <MksContext.Provider value={{ ...providerProps }}>
      {ui}
    </MksContext.Provider>,
    renderOptions
  );
};

it("displays a closed the drawer", async () => {
  const toggleDrawer = jest.fn();
  const isDrawerOpen = false;
  customRender(<DrawerRight />, {
    providerProps: { isDrawerOpen, toggleDrawer },
  });
  const text = await screen.findByText("Carrinho de compras");
  const backdrop = await screen
    .getByTestId("drawer")
    .getElementsByClassName("MuiBackdrop-root")[0];
  expect(text).not.toBeVisible();
  fireEvent.click(backdrop);

  expect(toggleDrawer).toHaveBeenCalledTimes(1);
});

it("displays a visible the drawer", async () => {
  const toggleDrawer = jest.fn();
  const isDrawerOpen = true;
  customRender(<DrawerRight />, {
    providerProps: { isDrawerOpen, toggleDrawer },
  });
  const text = await screen.findByText("Carrinho de compras");
  const backdrop = await screen
    .getByTestId("drawer")
    .getElementsByClassName("MuiBackdrop-root")[0];
  expect(text).toBeVisible();
  fireEvent.click(backdrop);

  expect(toggleDrawer).toHaveBeenCalledTimes(1);
});
