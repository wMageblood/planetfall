import ElementoUno from "../components/ElementoUno/ElementoUno";
import ElementoDos from "../components/ElementoDos/ElementoDos";
import ElementoTres from "../components/ElementoTres/ElementoTres";
import ElementoCuatro from "../components/ElementoCuatro/ElementoCuatro";
import LandPage from "../components/LandPage/LandPage";
import FirstGenPokemons from "../components/FirstGenPokemons/FirstGenPokemons";
import PokemonDetail from "../components/PokemonDetail/PokemonDetail";


const pathRoutes = [
  { path: 'elemento2/:pokemonName', element: PokemonDetail },
  { path: '/', element: LandPage },
  { path: 'elemento1', element: ElementoUno },
  { path: 'elemento2', element: ElementoDos },
  { path: 'elemento3', element: ElementoTres },
  { path: 'elemento4', element: ElementoCuatro },
  { path: 'First-Generation', element: FirstGenPokemons }
]

export default pathRoutes;