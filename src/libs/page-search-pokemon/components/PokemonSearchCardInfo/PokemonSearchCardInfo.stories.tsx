import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PokemonSearchCardInfo } from "./PokemonSearchCardInfo";

export default {
  title: "page-search-pokemon/PokemonSearchCardInfo",
  component: PokemonSearchCardInfo,
} as ComponentMeta<typeof PokemonSearchCardInfo>;

const Template: ComponentStory<typeof PokemonSearchCardInfo> = (args) => (
  <PokemonSearchCardInfo {...args} />
);

const example = {
  id: "UG9rZW1vbjowMDE=",
  number: "001",
  name: "Bulbasaur",
  weight: {
    minimum: "6.04kg",
    maximum: "7.76kg",
  },
  height: {
    minimum: "0.61m",
    maximum: "0.79m",
  },
  classification: "Seed Pokémon",
  types: ["Grass", "Poison"],
  resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  fleeRate: 0.1,
  maxCP: 951,
  maxHP: 1071,
  image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  attacks: {
    fast: [
      {
        name: "Tackle",
        type: "Normal",
        damage: 12,
      },
      {
        name: "Vine Whip",
        type: "Grass",
        damage: 7,
      },
    ],
    special: [
      {
        name: "Power Whip",
        type: "Grass",
        damage: 70,
      },
      {
        name: "Seed Bomb",
        type: "Grass",
        damage: 40,
      },
      {
        name: "Sludge Bomb",
        type: "Poison",
        damage: 55,
      },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDI=",
      number: "002",
      name: "Ivysaur",
      image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
    },
    {
      id: "UG9rZW1vbjowMDM=",
      number: "003",
      name: "Venusaur",
      image: "https://img.pokemondb.net/artwork/venusaur.jpg",
    },
  ],
  evolutionRequirements: {
    amount: 25,
    name: "Bulbasaur candies",
  },
};

export const Default = Template.bind({});
Default.args = {
  pokemon: example,
};

export const OverflowEvolutions = Template.bind({});
const dummyEvolution = {
  id: "UG9rZW1vbjowMDI=",
  number: "002",
  name: "Ivysaur",
  image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
};
OverflowEvolutions.args = {
  pokemon: {
    ...example,
    evolutions: [
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
      dummyEvolution,
    ],
  },
};
