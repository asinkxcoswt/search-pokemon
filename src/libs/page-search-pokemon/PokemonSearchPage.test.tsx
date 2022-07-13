import React from "react";
import { render, screen } from "@testing-library/react";
import { PokemonSearchWidget } from "./PokemonSearchWidget";

test("renders learn react link", () => {
  render(<PokemonSearchWidget />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});