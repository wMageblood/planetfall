import firstGenPokemonList from "../../constants/firstGenPokemonsList"
import { useNavigate } from "react-router-dom";

const ElementoDos = () => {

  const navigate = useNavigate()

  const handleDropdownChange = (e: any) => {
    const url = e.target.value;
    if (url) {
      navigate(url)
    }
  }

  return (
    <div className={`flex justify-center`}>
      <select onChange={handleDropdownChange}>{firstGenPokemonList.map(({ name }) => <option value={`/elemento2/${name}`} className={`text-black`}>{name}</option>)}</select>
    </div>
  )
}

export default ElementoDos