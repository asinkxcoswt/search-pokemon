import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PokemonSearchCardInfo } from "./PokemonSearchCardInfo";
import { Examples } from "@data-pokemon";

export default {
  title: "page-search-pokemon/PokemonSearchCardInfo",
  component: PokemonSearchCardInfo,
} as ComponentMeta<typeof PokemonSearchCardInfo>;

const Template: ComponentStory<typeof PokemonSearchCardInfo> = (args) => (
  <PokemonSearchCardInfo {...args} />
);

export const Bulbasaur = Template.bind({});
Bulbasaur.args = {
  pokemon: Examples.Bulbasaur,
};

export const Charmander = Template.bind({});
Charmander.args = {
  pokemon: Examples.Charmander,
};

export const Squirtle = Template.bind({});
Squirtle.args = {
  pokemon: Examples.Squirtle,
};
