import { Pokemon } from "@data-pokemon";
import { Card, Image, Grid, Text } from "@mantine/core";

export interface PokemonSearchCardInfoProps {
  pokemon: Pokemon;
}

export function PokemonSearchCardInfo({ pokemon }: PokemonSearchCardInfoProps) {
  return (
    <Card shadow="sm" p="sm">
      <Grid>
        <Grid.Col span={12}>
          <div style={{ display: "inline", backgroundColor: "red" }}>
            <Image src={pokemon.image} alt={pokemon.name} width={100} />
          </div>
          dfdf
          <Text weight={500}> {pokemon.name}</Text>
        </Grid.Col>
        <Grid.Col span={12}>2</Grid.Col>
      </Grid>
    </Card>
  );
}
