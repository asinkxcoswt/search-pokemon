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

export const Default = Template.bind({});
Default.args = {
  pokemon: Examples.Bulbasaur,
};
