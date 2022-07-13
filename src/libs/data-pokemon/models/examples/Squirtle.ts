import { Pokemon } from "../pokemon-models";

export const Squirtle: Pokemon = {
  id: "UG9rZW1vbjowMDc=",
  number: "007",
  name: "Squirtle",
  weight: {
    minimum: "7.88kg",
    maximum: "10.13kg",
  },
  height: {
    minimum: "0.44m",
    maximum: "0.56m",
  },
  classification: "Tiny Turtle Pokémon",
  types: ["Water"],
  resistant: ["Fire", "Water", "Ice", "Steel"],
  weaknesses: ["Electric", "Grass"],
  fleeRate: 0.1,
  maxCP: 891,
  maxHP: 1008,
  image: "https://img.pokemondb.net/artwork/squirtle.jpg",
  attacks: {
    fast: [
      {
        name: "Bubble",
        type: "Water",
        damage: 25,
      },
      {
        name: "Tackle",
        type: "Normal",
        damage: 12,
      },
    ],
    special: [
      {
        name: "Aqua Jet",
        type: "Water",
        damage: 25,
      },
      {
        name: "Aqua Tail",
        type: "Water",
        damage: 45,
      },
      {
        name: "Water Pulse",
        type: "Water",
        damage: 35,
      },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDg=",
      number: "008",
      name: "Wartortle",
      image: "https://img.pokemondb.net/artwork/wartortle.jpg",
    },
    {
      id: "UG9rZW1vbjowMDk=",
      number: "009",
      name: "Blastoise",
      image: "https://img.pokemondb.net/artwork/blastoise.jpg",
    },
  ],
  evolutionRequirements: {
    amount: 25,
    name: "Squirtle candies",
  },
};
