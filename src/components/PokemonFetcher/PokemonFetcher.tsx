import { useState, useRef } from "react";
import DetailedCharacterCard from "../DetailedCharacterCard/DetailedCharacterCard";
import WikiPokemonCard from "../WikiPokemonCard/WikiPokemonCard"

//set a pokemon #1 as default

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
          <WikiPokemonCard
            sprite={`${properties.sprites.other["official-artwork"].front_default}`}
            type={`${properties.types[0].type.name}`}
            weight={properties.weight}
            height={properties.height}
            abilities={properties.abilities[0].ability.name}
          />
        </div>
      </div>
    </div>
  )
};

export default PokemonFetcher;