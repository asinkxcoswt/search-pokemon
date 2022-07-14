import { Pokemon } from "@data-pokemon";
import { PlainCard } from "@ui-cards";
import { Table } from "flowbite-react";
import { TbSword, TbSwords } from "react-icons/tb";

export interface PokemonSearchCardInfoProps {
  pokemon: Pokemon;
  onSelectEvolution: (name: string) => void;
}

export function PokemonSearchCardInfo({
  pokemon,
  onSelectEvolution,
}: PokemonSearchCardInfoProps) {
  return (
    <PlainCard shadow>
      <div className="flex flex-col items-center">
        <img
          className="mb-3 h-24 w-24 rounded-md"
          src={pokemon.image}
          alt={pokemon.name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {pokemon.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 ">
          {pokemon.classification}
        </span>
      </div>
      <span className="text-lg font-normal items-center justify-center flex text-gray-800 dark:text-white my-4">
        Evolutions
      </span>
      <div className="flex space-x-3 justify-center flex-wrap">
        {pokemon.evolutions.length === 0
          ? "N/A"
          : pokemon.evolutions.map((x) => (
              <EvolutionThumbnail
                key={x.name}
                name={x.name}
                image={x.image}
                onSelect={onSelectEvolution}
              />
            ))}
      </div>
      <span className="text-lg font-normal items-center justify-center flex text-gray-800 dark:text-white my-4">
        <TbSword />
        &nbsp;Attacks&nbsp;
        <TbSword />
      </span>
      <Table striped={true} border={0}>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Damage</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {pokemon.attacks.fast.map((x) => (
            <AttackLine
              key={x.name}
              name={x.name}
              type={x.type}
              damage={x.damage}
            />
          ))}
        </Table.Body>
      </Table>
      <span className="text-lg font-normal items-center justify-center flex text-gray-800 dark:text-white my-4">
        <TbSwords />
        &nbsp;Specials&nbsp;
        <TbSwords />
      </span>
      <Table striped={true} border={0}>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Damage</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {pokemon.attacks.special.map((x) => (
            <AttackLine
              key={x.name}
              name={x.name}
              type={x.type}
              damage={x.damage}
            />
          ))}
        </Table.Body>
      </Table>
      <span className="text-lg font-normal items-center justify-center flex text-gray-800 dark:text-white my-4">
        Other
      </span>
      <Table striped={true} border={0}>
        <Table.Head>
          <Table.HeadCell
            colSpan={2}
            className="text-center pt-2 pb-2"
          ></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <DetailLine label="Max HP" value={String(pokemon.maxHP)} />
          <DetailLine label="Max CP" value={String(pokemon.maxCP)} />
          <DetailLine
            label="Weight"
            value={`${pokemon.weight.minimum} - ${pokemon.weight.maximum}`}
          />
          <DetailLine
            label="Height"
            value={`${pokemon.height.minimum} - ${pokemon.height.maximum}`}
          />
          <DetailLine label="Types" value={pokemon.types.join(", ")} />
          <DetailLine label="Resistant" value={pokemon.resistant.join(", ")} />
          <DetailLine
            label="Weaknesses"
            value={pokemon.weaknesses.join(", ")}
          />
          <DetailLine label="Flee Rate" value={`${pokemon.fleeRate * 100}%`} />
        </Table.Body>
      </Table>
    </PlainCard>
  );
}

function DetailLine({ label, value }: { label: string; value: string }) {
  return (
    <Table.Row>
      <Table.HeadCell className="pt-2 pb-2">{label}</Table.HeadCell>
      <Table.Cell className="pt-2 pb-2">{value}</Table.Cell>
    </Table.Row>
  );
}
function AttackLine({
  name,
  type,
  damage,
}: {
  name: string;
  type: string;
  damage: number;
}) {
  return (
    <Table.Row>
      <Table.Cell className="pt-2 pb-2">{name}</Table.Cell>
      <Table.Cell className="pt-2 pb-2">{type}</Table.Cell>
      <Table.Cell className="pt-2 pb-2">{damage}</Table.Cell>
    </Table.Row>
  );
}

function EvolutionThumbnail({
  image,
  name,
  onSelect,
}: {
  image: string;
  name: string;
  onSelect: (name: string) => void;
}) {
  return (
    <div
      className="flex flex-col items-center hover:cursor-pointer hover:scale-150 hover:transition-all hover:m-2 "
      onClick={() => {
        onSelect(name);
      }}
    >
      <img className="mb-1 mt-1 h-12 w-12 " src={image} alt={name} />
      <h5 className="text-sm font-normal text-gray-500 dark:text-white">
        {name}
      </h5>
    </div>
  );
}
