import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WikiPokemonCard from "../WikiPokemonCard/WikiPokemonCard";


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


  return (
    <div>
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