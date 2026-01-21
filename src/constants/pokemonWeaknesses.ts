const pokemonWeaknessesTwo = (type: string) => {
  const pokemonTypeWeaknesses: Record<string, string[]> = {
    normal: ['fighting'],
    fire: ['ground', 'rock', 'water'],
    water: ['electric', 'grass'],
    electric: ['ground'],
    grass: ['bug', 'fire', 'flying', 'ice', 'poison'],
    ice: ['fighting', 'fire', 'rock', 'steel'],
    fighting: ['fairy', 'flying', 'psychic'],
    poison: ['ground', 'psychic'],
    ground: ['grass', 'ice', 'water'],
    flying: ['electric', 'ice', 'rock'],
    psychic: ['bug', 'dark', 'ghost'],
    bug: ['fire', 'flying', 'rock'],
    rock: ['fighting', 'grass', 'ground', 'steel', 'water'],
    ghost: ['dark', 'ghost'],
    dragon: ['dragon', 'fairy', 'ice'],
    dark: ['bug', 'fairy', 'fighting'],
    steel: ['fighting', 'fire', 'ground'],
    fairy: ['poison', 'steel'],
    stellar: ['stellar'],

  }

  return pokemonTypeWeaknesses[type] || [];

}

export default pokemonWeaknessesTwo;