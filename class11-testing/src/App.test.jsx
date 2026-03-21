import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />); //fake browserr
  const linkElement = screen.getByText("JEST"); //searches for a link element with the word JEST
  expect(linkElement).toBeInTheDocument(); //JEST-DOM knows toBeInTheDocument, if JEST is not there, then test fails
});
