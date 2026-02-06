import backGroundColor from "../../constants/pokemonTypes";
import pokemonWeaknessesTwo from "../../constants/pokemonWeaknesses";
import firstGenPokemonList from "../../constants/firstGenPokemonsList";

type PokemonData = {
  name?: string | any;
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

  const valueFetcher = (key: string) => {
    const pokemon = firstGenPokemonList.find(({ name }) => name.toLowerCase() === data.name?.toLowerCase());
    return pokemon ? pokemon[key as keyof typeof pokemon] : null;
  }

  const handleClickBlue = () => console.log("CLICKED BLUE")
  const handleClickRed = () => console.log("CLICKED RED")

  return (
    <div className={`mt-5 mx-4`}>

      <h1 className={`text-center mb-5 text-4xl font-Geist tracking-tighter`}>{`${upperCaseFirstLetter(data.name)} `}<span className={`text-gray-700 tracking-normal`}>#{data.id}</span></h1>

      <div className={`flex justify-center`}>
        <img className={`bg-neutral-500 rounded-sm max-h-100 max-w-100`} height={`400`} width={`400`} src={`${data.sprite}`} />
        <div className={`ml-5 w-100 h-auto font-Geist`}>
          <p>{valueFetcher('description')}</p>
          <p className={`my-5`}>
            Versions:
            {<button onClick={handleClickBlue} className={`bg-blue-400 mx-2 px-2 py-1 rounded-full`}>BLUE</button>}
            {<button onClick={handleClickRed} className={`bg-red-400 px-2 py-1 rounded-full`}>RED</button>}
          </p>
          <div className={`px-3 bg- rounded-lg py-4 bg-neutral-500`}>
            <div className={`flex justify-between pr-10 mb-5`}>
              <div>
                <p className={`text-gray-300`}>Height</p>
                <p>{`${data.height / 10}m (${heightConverter(data.height)} ft)`}</p>
              </div>
              <div>
                <p className={`text-gray-300`}>Weight</p>
                <p>{`${data.weight / 10}kg (${weightConverter(data.weight)} lbs)`}</p>
              </div>
            </div>
            <div className={`flex justify-between pr-10 mb-5`}>
              <div>
                <p className={`text-gray-300`}>Category</p>
                <p>{valueFetcher('category')}</p>
              </div>
              <div>
                <p className={`text-gray-300`}>Abilities</p>
                <p>{upperCaseFirstLetter(data.abilities)}</p>
              </div>
            </div>
            <div className={`flex justify-between pr-10`}>
              <div>
                <p className={`text-gray-300`}>Gender</p>
                <p>{valueFetcher('gender')}</p>
              </div>
            </div>
          </div>
          <div className={`mt-4`}>
            <h1>Type</h1>
            <button className={`${backGroundColor(data.type)} w-30 px-6 py-1 rounded text-white mt-2`}>{upperCaseFirstLetter(data.type)}</button>
          </div>
          <div className={`mt-4`}>
            <h1>Weaknesses</h1>
            {pokemonWeaknessesTwo(data.type).map((x, key) => <button key={key} className={`${backGroundColor(x)} w-30 px-6 mt-2 mr-2 py-1 rounded-sm`}>{upperCaseFirstLetter(x)}</button>)}
          </div>
        </div>
      </div>
    </div>

  )
}

export default WikiPokemonCard;