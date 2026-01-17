import backGroundColor from "../../constants/pokemonTypes";

type PokemonData = {
  name?: string | number;
  id?: number;
  briefDescription?: string | null;
  weight?: number | any;
  height?: number | any;
  sprite?: string;
  category?: string;
  abilities?: string | any;
  gender?: string;
  type?: string | any;
  weaknesses?: string | undefined | null;
};

const WikiPokemonCard = (data: PokemonData) => {

  const heightConverter = (height: number) => ((height / 0.3048) / 10).toFixed(2);  // m to ft
  const weightConverter = (weight: number) => Math.ceil(((weight * 2.2046) / 10));  // kg to lb
  const upperCaseFirstLetter = (letter: string) => letter.slice(0, 1).toUpperCase() + letter.slice(1); //uppercase first letter of the ability

  return (
    <div className={`flex w-full bg-red-500 rounded-sm`}>
      <div className={`w-3xl`}>
        <img alt={`${data.name}`} src={`${data.sprite}`} />
      </div>
      <div className={`font-semibold text-xl bg-amber-600`}>
        <p className={`mt-2 ml-2 mb-2`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolor accusantium architecto exercitationem ullam sequi mollitia necessitatibus, quod iure eligendi quae saepe incidunt numquam quas est? Minima cupiditate ab perspiciatis?
        </p>
        <div className={`grid grid-cols-2 w-lg ml-2 my-10`}>
          <p> Height:  {`${data.height / 10}m (${heightConverter(data.height)}ft)`}</p>
          <p> Weight:  {`${data.weight / 10}kg (${weightConverter(data.weight)}lbs)`}</p>
          <p> Ability: {`${upperCaseFirstLetter(data.abilities)}`}</p>
          <p> Gender: Unknown</p>
          <p> Category: Generic</p>
        </div>
        <div className={`ml-2`}>
          Type: <button className={`${backGroundColor(`${data.type}`)} ml-2 px-3 py-1 rounded-sm ring-2`}>{upperCaseFirstLetter(data.type)}</button>
        </div>
      </div>
    </div>
  )
}

export default WikiPokemonCard