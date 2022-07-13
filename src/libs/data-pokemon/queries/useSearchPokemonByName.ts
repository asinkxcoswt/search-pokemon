import { usePokemonQuery } from "../gen/generated";
import { Pokemon } from "../models/pokemon-models";

/**
 * Wrapper of Apollo's query to
 * - map API data to local Pokemon model and provide default value safeguard
 * - skip API call and return pokemon = undefined when the input name === "",
 * - return pokemon = undefined when no pokemon found for the given name
 */
export function useSearchPokemonByName(name: string): {
  pokemon?: Pokemon;
  loading: boolean;
} {
  const { data, loading } = usePokemonQuery({
    variables: { name },
    skip: name === "",
  });

  if (!data?.pokemon) {
    return { pokemon: undefined, loading: false };
  }

  const pokemon: Pokemon = {
    id: data.pokemon.id,
    number: data.pokemon.number ?? "",
    name: data.pokemon.name ?? "",
    weight: {
      maximum: data.pokemon.weight?.maximum ?? "",
      minimum: data.pokemon.weight?.minimum ?? "",
    },
    height: {
      maximum: data.pokemon.height?.maximum ?? "",
      minimum: data.pokemon.height?.minimum ?? "",
    },
    classification: data.pokemon.classification ?? "",
    types: data.pokemon.types?.map((x) => x ?? "") ?? [],
    resistant: data.pokemon.resistant?.map((x) => x ?? "") ?? [],
    attacks: {
      fast:
        data.pokemon.attacks?.fast?.map((x) => ({
          damage: x?.damage ?? 0,
          name: x?.name ?? "",
          type: x?.type ?? "",
        })) ?? [],
      special:
        data.pokemon.attacks?.special?.map((x) => ({
          damage: x?.damage ?? 0,
          name: x?.name ?? "",
          type: x?.type ?? "",
        })) ?? [],
    },
    weaknesses: data.pokemon.weaknesses?.map((x) => x ?? "") ?? [],
    fleeRate: data.pokemon.fleeRate ?? 0,
    maxCP: data.pokemon.maxCP ?? 0,
    maxHP: data.pokemon.maxHP ?? 0,
    image: data.pokemon.image ?? "https://via.placeholder.com/150",
    evolutions:
      data.pokemon.evolutions?.map((x) => ({
        id: x?.id ?? "",
        image: x?.image ?? "https://via.placeholder.com/150",
        name: x?.name ?? "",
        number: x?.number ?? "",
      })) ?? [],
    evolutionRequirements: {
      amount: data.pokemon.evolutionRequirements?.amount ?? 0,
      name: data.pokemon.evolutionRequirements?.name ?? "",
    },
  };
  return {
    pokemon,
    loading,
  };
}
