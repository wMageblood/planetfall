import firstGenPokemonList from "../../constants/firstGenPokemonsList";

const FirstGenPokemons = () => {
  return (
    <div className={`flex justify-center mt-2`}>
      <button className={`left-button flex justify-center pt-6 mx-1 w-xl h-64 text-xl font-bold rounded-sm`}>LEFT BUTTON</button>
      <button className={`right-button flex justify-center pt-6 mx-1 w-xl h-64 text-xl font-bold rounded-sm`}>RIGHT BUTTON</button>
    </div>
  )
}

export default FirstGenPokemons;

// <div className={`inline-block grid-cols-1`}>
//   <ul>
//     {firstGenPokemonList.map(({ name, number }) => (<li><a className={``} href={`/First-Generation/${name}`}>{`${name} #${number}`}</a></li>))}
//   </ul>
// </div>