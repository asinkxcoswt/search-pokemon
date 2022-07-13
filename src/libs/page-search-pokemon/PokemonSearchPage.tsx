import { useSearchPokemonByName } from "@data-pokemon";
import { useSearchParams } from "react-router-dom";

export interface PokemonSearchPageProps {}

export function PokemonSearchPage(props: PokemonSearchPageProps) {
  const [params, setParams] = useSearchParams();

  const name = params.get("name") ?? "";

  const { pokemon, loading } = useSearchPokemonByName(name);

  if (name === "") {
    return <>Please enter a pokemon name</>;
  }

  if (loading) {
    return <>Loading</>;
  }

  if (!pokemon) {
    return <>Not found</>;
  }

  return <>{JSON.stringify(pokemon)}</>;
}
