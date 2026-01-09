import { useState, useRef } from "react";
import DetailedCharacterCard from "../DetailedCharacterCard/DetailedCharacterCard";

//set a pikachu as default

const pokemonProperties = {
  name: '',
  id: '',
  height: '',
  sprites: {
    other: {
      "official-artwork": {
        front_default: ''
      }
    }
  },
  species: { name: '' },
  abilities: [
    {
      ability: {
        name: '',
      },
    },
  ],
  types: [
    {
      type: {
        name: ''
      }
    }
  ],
  stats: [
    {
      base_stat: '',
    }
  ],
  weight: '',

};

const PokemonFetcher = () => {

  const [properties, setProperties] = useState(pokemonProperties);
  const valRef = useRef<HTMLInputElement | null>(null);

  const handleClick = async () => {

    const pokemon = valRef.current!.value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    try {
      if (!response.ok) {
        throw new Error(`Pokemon not found. Response Number: ${response.status}`)
      }

      const data = await response.json();

      setProperties(data)

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div>
      <div>
        <div>
          <button onClick={handleClick} className="m-4 p-2 bg-slate-500/50 rounded-sm">Add Pokemon</button>
          <input placeholder={'Insert Pokemon'} className={'bg-slate-800/90 ml-2 p-2 rounded-sm'} ref={valRef} />
        </div>
        <div>
          <DetailedCharacterCard
            type={properties.types[0]?.type.name}
            id={properties.id}
            secondAbility={properties.abilities[1]?.ability.name}
            firstAbility={properties.abilities[0].ability.name}
            name={properties.name}
            sprite={properties.sprites.other["official-artwork"].front_default}
            hp_stat={properties.stats[0]?.base_stat}
            attack_stat={properties.stats[1]?.base_stat}
            special_attack_stat={properties.stats[3]?.base_stat}
            defense_stat={properties.stats[2]?.base_stat}
            special_defense_stat={properties.stats[4]?.base_stat}
            weight={properties.weight}
          />
        </div>
      </div>
    </div>
  )
};

export default PokemonFetcher;