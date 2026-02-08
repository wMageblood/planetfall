import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WikiPokemonCard from "../WikiPokemonCard/WikiPokemonCard";
import firstGenPokemonList from "../../constants/firstGenPokemonsList";


const pokemonData = {
  id: 0,
  name: '',
  sprites: { other: { "official-artwork": { front_default: '' } } },
  types: [{ type: { name: '' } }],
  weight: '',
  height: '',
  abilities: [{ ability: { name: '' }, },],
}


const PokemonDetail = () => {

  const [properties, setProperties] = useState(pokemonData)
  const { pokemonName } = useParams();

  const fetchPokemon = async (pokemonName: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    try {
      if (!response.ok) {
        throw new Error(`Pokemon not found. Response Number: ${response.status}`)
      }
      const data = await response.json()
      setProperties(data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (pokemonName) {
      fetchPokemon(pokemonName)
    }
  }, [pokemonName]);


  const fetchPreviousPokemon = (key: string) => {
    const findNextPokemon = firstGenPokemonList.find(({ number }) => number === properties.id - 1)
    return findNextPokemon ? findNextPokemon[key as keyof typeof findNextPokemon] : null;
  }

  const fetchNextPokemon = (key: string) => {
    const findNextPokemon = firstGenPokemonList.find(({ number }) => number === properties.id + 2)
    return findNextPokemon ? findNextPokemon[key as keyof typeof findNextPokemon] : null;
  }

  // const getNeighbor = (offset: number, key: string) => {

  //   const currentId = firstGenPokemonList.findIndex(({ number }) => number === properties.id)
  //   const targetPokemon = firstGenPokemonList[currentId + offset]
  //   return targetPokemon ? targetPokemon[key as keyof typeof targetPokemon] : null;

  // };

  // const prev = getNeighbor(-1, 'name')
  // const next = getNeighbor(1, 'name')


  //fetch current pokemon, then handleClick function using ID + 1 or ID - 1

  return (
    <div className={`mt-4`}>
      <div className={`flex space-x-2 mx-4 *:h-10 *:rounded-sm *:w-1/2 *:font-Geist *:tracking-tighter`}>
        <a href={`/${fetchPreviousPokemon('name')}`} className={`bg-blue-500 flex items-center justify-center`}>PREVIOUS {fetchPreviousPokemon('name')}</a>
        <a href={`/${fetchNextPokemon('name')}`} className={`bg-green-500 flex items-center justify-center`}>NEXT {fetchNextPokemon('name')}</a>
        {/* <button onClick={() => getNeighbor(1, 'name')} className={`px-6 bg-red-500`}>check</button> */}

      </div>
      <WikiPokemonCard
        id={properties.id}
        name={properties.name}
        sprite={`${properties.sprites.other["official-artwork"].front_default}`}
        type={`${properties.types[0].type.name}`}
        weight={properties.weight}
        height={properties.height}
        abilities={properties.abilities[0].ability.name}
      />
    </div>
  )
}

export default PokemonDetail