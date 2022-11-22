import './App.css';


const cuandollegueelpokemon = (pokemon) => {

  console.log(pokemon.sprites.front_default)
  const image = document.getElementById("pokemon-image")
  image.src = pokemon.sprites.front_default
}



fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(response => response.json())
  .then(cuandollegueelpokemon)

function App() {

  return (
    <div className='App'>

    </div>
  );
}

export default App;
