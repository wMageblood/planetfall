import backGroundColor from "../../constants/pokemonTypes";
import pokemonWeaknessesTwo from "../../constants/pokemonWeaknesses";

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
    <div className={`mx-4`}>
      <div className={`flex w-full rounded-sm bg-tailwindBlueNavigation p-4`}>
        <div className={`w-3xl`}>
          <img alt={`${data.name}`} src={`${data.sprite}`} />
        </div>
        <div className={`font-semibold text-xl`}>
          <p className={`mt-2 ml-2 mb-2 text-gray-200`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolor accusantium architecto exercitationem ullam sequi mollitia necessitatibus, quod iure eligendi quae saepe incidunt numquam quas est? Minima cupiditate ab perspiciatis?
          </p>
          <div className={`grid grid-cols-2 w-lg ml-2 my-10`}>
            <p className={`font-normal text-gray-300`}>Height:</p>
            <p className={`font-normal text-gray-300`}>Weight:</p>
            <p>{`${data.height / 10}m (${heightConverter(data.height)}ft)`}</p>
            <p className={`mb-6`}>{`${data.weight / 10}kg (${weightConverter(data.weight)}lbs)`}</p>
            <p className={`font-normal text-gray-300`}> Ability:</p>
            <p className={`font-normal text-gray-300`}> Gender:</p>
            <p className={`mb-6`}>{`${upperCaseFirstLetter(data.abilities)}`}</p>
            <p className={``}>Unknown</p>
            <p className={`font-normal text-gray-300`}>Category:</p>
            <span></span>
            <p className={``}>Generic</p>
          </div>
          <div className={`ml-2 mb-6`}>
            <span className={`font-normal text-gray-300`}>Type: </span><button className={`${backGroundColor(data.type)} ml-2 px-3 py-1 rounded-sm ring-2`}>{upperCaseFirstLetter(data.type)}</button>
          </div>
          <div className={`m-2 flex`}>
            <span className={`font-normal text-gray-300 mr-2`}>Weaknesses: </span> <div> {pokemonWeaknessesTwo(data.type).map((x) =>
              <button className={`${backGroundColor(x)} ml-2 px-3 py-1 rounded-sm ring-2`}>{x.toUpperCase()}</button>)}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WikiPokemonCard


/*
        <div className="relative flex py-5 items-center">
          <div className="grow border-t border-gray-400"></div>
            <span className="shrink mx-4 text-gray-400">Content</span>
          <div className="grow border-t border-gray-400"></div>
        </div>
*/
