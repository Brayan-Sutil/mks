/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";
import RootLayout from "./layout";

it("App home: renders with root layout and displays header", async () => {
  render(
    <RootLayout>
      <Page />
    </RootLayout>
  );
  const header = await screen.findAllByText("MKS");
  expect(header).toHaveLength(1);
});
