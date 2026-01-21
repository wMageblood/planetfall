const colorType = (type: string): string => {

  const colorTypePalette: Record<string, string> = {
    normal: 'text-normal',
    fire: 'text-fire',
    water: 'text-water',
    electric: 'text-electric',
    Grass: 'text-grass',
    ice: 'text-ice',
    fighting: 'text-fighting',
    poison: 'text-poison',
    ground: 'text-ground',
    flying: 'text-flying',
    psychic: 'text-psychic',
    bug: 'text-bug',
    rock: 'text-rock',
    ghost: 'text-ghost',
    dragon: 'text-dragon',
    dark: 'text-dark',
    steel: 'text-steel',
    fairy: 'text-fairy',
    stellar: 'text-stellar',
  }
  return colorTypePalette[type] || "text-gray-400"
}

export default colorType;