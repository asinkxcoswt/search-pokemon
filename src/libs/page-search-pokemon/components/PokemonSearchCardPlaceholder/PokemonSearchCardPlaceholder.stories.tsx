import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PokemonSearchCardPlaceholder } from "./PokemonSearchCardPlaceholder";

export default {
  title: "page-search-pokemon/PokemonSearchCardPlaceholder",
  component: PokemonSearchCardPlaceholder,
} as ComponentMeta<typeof PokemonSearchCardPlaceholder>;

const Template: ComponentStory<typeof PokemonSearchCardPlaceholder> = (
  args
) => <PokemonSearchCardPlaceholder {...args} />;

export const Default = Template.bind({});
Default.args = {};
