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

//ive the feeling that using type would be much easier

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

/*
table for each type of colors:
  1. NORMAL   10. FLYING
  2. FIRE     11. PSYCHICH
  3. WATER    12. BUG
  4. ELECTRIC 13. ROCK
  5. GRASS    14. GHOST
  6. ICE      15. DRAGON
  7. FIGHTING 16. DARK
  8. POISON   17. STEEL
  9. GROUND   18. FAIRY
       19. STELLAR
*/