import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { PokemonSearchPage } from "./PokemonSearchPage";

jest.mock("../data-pokemon/gen/generated");

describe("Test PokemonSearchPage", () => {
  it("Can render Charmander and its types should be 'Fire'", () => {
    render(
      <MemoryRouter initialEntries={["/?name=Charmander"]}>
        <PokemonSearchPage />
      </MemoryRouter>
    );
    const theImgElement = screen.getByAltText("Charmander");
    expect(theImgElement).toBeInTheDocument();

    const typeDetailElement = screen.getByRole("_testTypes");
    expect(typeDetailElement.textContent).toBe("Fire");
  });

  it("Can render Bulbasaur and its types should be 'Grass, Poison'", () => {
    render(
      <MemoryRouter initialEntries={["/?name=Bulbasaur"]}>
        <PokemonSearchPage />
      </MemoryRouter>
    );
    const theImgElement = screen.getByAltText("Bulbasaur");
    expect(theImgElement).toBeInTheDocument();

    const typeDetailElement = screen.getByRole("_testTypes");
    expect(typeDetailElement.textContent).toBe("Grass, Poison");
  });

  it("Can render Squirtle and its types should be 'Water'", () => {
    render(
      <MemoryRouter initialEntries={["/?name=Squirtle"]}>
        <PokemonSearchPage />
      </MemoryRouter>
    );
    const theImgElement = screen.getByAltText("Squirtle");
    expect(theImgElement).toBeInTheDocument();

    const typeDetailElement = screen.getByRole("_testTypes");
    expect(typeDetailElement.textContent).toBe("Water");
  });

  it("Can render the NOT_FOUND case when entering an unknown Pokemon name", () => {
    render(
      <MemoryRouter initialEntries={["/?name=notAPokemon"]}>
        <PokemonSearchPage />
      </MemoryRouter>
    );
    const theNotFoundMessage = screen.getByText("Pokemon not found");
    expect(theNotFoundMessage).toBeInTheDocument();
  });
});
