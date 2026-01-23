import { useRef } from "react"
import firstGenPokemonList from "../../constants/firstGenPokemonsList"

const ElementoDos = () => {

  const inputValue = useRef<HTMLInputElement | any>(null)

  const handleClick = () => {
    const selectedPokemon = inputValue.current.value
    window.location.href = `elemento2/${selectedPokemon}`
  }

  return (
    <div className={`mt-2 ml-4`}>
      <label htmlFor={`site-search`} className={`text-lg font-semibold uppercase tracking-tighter`}>Name or Number</label>
      <div className={`flex`}>
        <input ref={inputValue} className={`bg-white text-center text-black rounded-xs border border-gray-800 h-8`} placeholder={`Pokemon Name or #`} list="site-search-pokemon" id="site-search" name="site-search" />
        <datalist id="site-search-pokemon">
          {firstGenPokemonList.map(({ name, number }) => (<option key={name} value={name || number}>{name}</option>))}
        </datalist>
        <button onClick={handleClick} className={`ml-2  h-8 w-8 bg-orange-400 border border-orange-400 rounded-xs`}>🔍</button>
      </div>

    </div>
  )
}

export default ElementoDos