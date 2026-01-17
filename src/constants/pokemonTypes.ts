const backGroundColor = (type: string): string => {

  const backgroundColorPalette: Record<string, string> = {
    normal: 'bg-normal',
    fire: 'bg-fire',
    water: 'bg-water',
    electric: 'bg-electric',
    Grass: 'bg-grass',
    ice: 'bg-ice',
    fighting: 'bg-fighting',
    poison: 'bg-poison',
    ground: 'bg-ground',
    flying: 'bg-flying',
    psychic: 'bg-psychic',
    bug: 'bg-bug',
    rock: 'bg-rock',
    ghost: 'bg-ghost',
    dragon: 'bg-dragon',
    dark: 'bg-dark',
    steel: 'bg-steel',
    fairy: 'bg-fairy',
    stellar: 'bg-stellar',
  }

  return backgroundColorPalette[type] || "bg-gray-400";
}

export default backGroundColor;