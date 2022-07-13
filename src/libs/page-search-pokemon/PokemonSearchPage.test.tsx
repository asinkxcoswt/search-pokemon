import React from "react";
import { render, screen } from "@testing-library/react";
import { PokemonSearchPage } from "./PokemonSearchPage";

test("renders learn react link", () => {
  render(<PokemonSearchPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
