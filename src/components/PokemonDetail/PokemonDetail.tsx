import ElementoDos from "../ElementoDos/ElementoDos";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  console.log(pokemonName);

  return (
    <div>
      <ElementoDos />
      <p>Showing {pokemonName}</p>
    </div>
  )
}

export default PokemonDetail