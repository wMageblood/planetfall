interface PokemonInformation {
  name: string;
  id: string;
  sprite: string;
  firstAbility: string;
  secondAbility: string;
  thirdAbility?: string;
  type?: string;
  hp_stat?: string;
  attack_stat?: string;
  defense_stat?: string;
  speed_stat?: string;
  special_attack_stat?: string;
  special_defense_stat?: string;
  weight?: string;
}

//can refactor this as multiple interfaces i.e: interface PokemonStat { hp_stat: string; defense_stat?: string;}
//same for abilities interface PokemonAbilities {firstAbility?: string; secondAbility?: string; } [...]

const DetailedCharacterCard = (Pokemon: PokemonInformation) => {

  const thirdAbility = Pokemon.thirdAbility === undefined;

  //function to hide if pokemonIsHidden is true to reduce clutter

  return (
    <div className={`mx-2 min-h-22 rounded-sm bg-slate-400/50`}>
      <div className={`flex justify-between mx-2 pt-1`}>
        <div className={`flex`}>
          <img className={`w-20`} alt={Pokemon.name} src={Pokemon.sprite} />
          <p className={`uppercase font-bold text-3xl`}>{`${Pokemon.name}`}<span>#</span>{`${Pokemon.id}`}</p>
        </div>
        <div>
          <p className={``}>Ability #1: {Pokemon.firstAbility}</p>
          <p className={``}>Ability #2: {Pokemon.secondAbility}</p>
          <p style={{ display: thirdAbility ? 'none' : 'block' }} className={``}>Ability #3: {Pokemon.thirdAbility}</p>
          <p className={`uppercase font-bold text-qualityEpic`}>{Pokemon.type}</p>
        </div>
        <div>
          <p className={``}>HP: {Pokemon.hp_stat}</p>
          <p className={``}>Attack: {Pokemon.attack_stat}</p>
          <p className={``}>Defense: {Pokemon.defense_stat}</p>
        </div>
        <div>
          <p>placeholder text 1</p>
          <p className={``}>Sp. Attack: {Pokemon.special_attack_stat}</p>
          <p className={``}>Sp. Defense: {Pokemon.special_defense_stat}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailedCharacterCard