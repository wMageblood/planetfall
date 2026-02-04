import ElementoUno from "../components/ElementoUno/ElementoUno";
import PokemonSearch from "../components/PokemonSearch/PokemonSearch";
import ElementoTres from "../components/ElementoTres/ElementoTres";
import ElementoCuatro from "../components/ElementoCuatro/ElementoCuatro";
import Home from "../components/Home/Home";
import FirstGenPokemons from "../components/FirstGenPokemons/FirstGenPokemons";
import PokemonDetail from "../components/PokemonDetail/PokemonDetail";


const pathRoutes = [
  { path: '/', element: Home },
  { path: '/:pokemonName', element: PokemonDetail },
  { path: 'elemento1', element: ElementoUno },
  { path: 'search', element: PokemonSearch },
  { path: 'elemento3', element: ElementoTres },
  { path: 'elemento4', element: ElementoCuatro },
  { path: 'First-Generation', element: FirstGenPokemons }
]

export default pathRoutes;