interface PokemonInformation {
  name: string;
  id?: number | string;
  height?: number | string;
  sprites?: string;
  firstAbility?: string;
  secondAbility?: string;
}

const CompactCharacterCard = (Pokemon: PokemonInformation) => {

  const isNameHidden = Pokemon.name === '';
  const isSpriteHidden = Pokemon.sprites === '';
  const isFirstAbilityHidden = Pokemon.firstAbility === '';
  const isSecondAbilityHidden = Pokemon.secondAbility === undefined;

  return (
    <div className="ml-4 mb-4 shadow-xl/30 p-4 border-3 border-tailwindBorder bg-tailwindBlueNavigation/50 rounded-lg inline-block content-center justify-items-center min-w-64 max-w-lg">
      <img style={{ display: isSpriteHidden ? 'none' : 'block' }} className="size-26 rounded-full mb-2" src={Pokemon.sprites} alt=""></img>
      <p style={{ display: isNameHidden ? 'none' : 'block' }} className={`font-bold`} >{`${Pokemon.name.toUpperCase()} #${Pokemon.id}`}</p>
      <p style={{ display: isFirstAbilityHidden ? 'none' : 'block' }}>Ability #1: <span className={'uppercase font-bold'}> {Pokemon.firstAbility} </span></p>
      <p style={{ display: isSecondAbilityHidden ? 'none' : 'block' }}>Ability #2: <span className={'uppercase font-bold'}> {Pokemon.secondAbility} </span></p>
    </div>
  )
}

export default CompactCharacterCard;