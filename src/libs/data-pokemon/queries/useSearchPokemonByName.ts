import { useRef } from "react";
import { usePokemonQuery } from "../gen/generated";
import { Pokemon } from "../models/pokemon-models";

/**
 * Wrapper of Apollo's query to
 * - map API data to local Pokemon model and provide default value safeguard
 * - skip API call when the input name === "",
 * - return pokemon = undefined when no pokemon found for the given name
 * - resolve the pokemon to previousData while loading, because otherwise it will always render case NOT_FOUND during loading
 * - distinguish the state between EMPTY (not yet search) and NOT_FOUND (serched and got no result), so the screen can display different message
 */
export function useSearchPokemonByName(name: string): {
  result:
    | { status: "EMPTY" | "NOT_FOUND" }
    | {
        status: "FOUND";
        pokemon: Pokemon;
      };
  loading: boolean;
} {
  const hasSearchedAtLeastOnce = useRef(false);
  const { data, loading, previousData } = usePokemonQuery({
    variables: { name },
    skip: name === "",
    onCompleted: () => {
      hasSearchedAtLeastOnce.current = true;
    },
  });

  if (!data?.pokemon && !hasSearchedAtLeastOnce.current) {
    return {
      loading,
      result: {
        status: "EMPTY",
      },
    };
  }

  const pokemonApiData = loading ? previousData?.pokemon : data?.pokemon;

  if (!pokemonApiData) {
    return {
      loading,
      result: {
        status: "NOT_FOUND",
      },
    };
  }

  const pokemon: Pokemon = {
    id: pokemonApiData.id,
    number: pokemonApiData.number ?? "",
    name: pokemonApiData.name ?? "",
    weight: {
      maximum: pokemonApiData.weight?.maximum ?? "",
      minimum: pokemonApiData.weight?.minimum ?? "",
    },
    height: {
      maximum: pokemonApiData.height?.maximum ?? "",
      minimum: pokemonApiData.height?.minimum ?? "",
    },
    classification: pokemonApiData.classification ?? "",
    types: pokemonApiData.types?.map((x) => x ?? "") ?? [],
    resistant: pokemonApiData.resistant?.map((x) => x ?? "") ?? [],
    attacks: {
      fast:
        pokemonApiData.attacks?.fast?.map((x) => ({
          damage: x?.damage ?? 0,
          name: x?.name ?? "",
          type: x?.type ?? "",
        })) ?? [],
      special:
        pokemonApiData.attacks?.special?.map((x) => ({
          damage: x?.damage ?? 0,
          name: x?.name ?? "",
          type: x?.type ?? "",
        })) ?? [],
    },
    weaknesses: pokemonApiData.weaknesses?.map((x) => x ?? "") ?? [],
    fleeRate: pokemonApiData.fleeRate ?? 0,
    maxCP: pokemonApiData.maxCP ?? 0,
    maxHP: pokemonApiData.maxHP ?? 0,
    image: pokemonApiData.image ?? "https://via.placeholder.com/150",
    evolutions:
      pokemonApiData.evolutions?.map((x) => ({
        id: x?.id ?? "",
        image: x?.image ?? "https://via.placeholder.com/150",
        name: x?.name ?? "",
        number: x?.number ?? "",
      })) ?? [],
    evolutionRequirements: {
      amount: pokemonApiData.evolutionRequirements?.amount ?? 0,
      name: pokemonApiData.evolutionRequirements?.name ?? "",
    },
  };
  return {
    result: {
      status: "FOUND",
      pokemon,
    },
    loading,
  };
}
