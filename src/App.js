import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ pokemons, alteraPokemons ] = React.useState ( [] );
  const [ txtPokemon, alteraTxtPokemon ] = React.useState("");

function buscaPokemon(){
  axios.get("https://pokeapi.co/api/v2/pokemon/"+txtPokemon)
    .then( Response => {
      console.log("Requisição bem sucedida!");
      alteraPokemons  (Response.data.results);
    })
    .catch( Response => {
      console.log("Deu ruim na requisição");
      console.log(Response);
    })
}

  function buscaTodosPokemons(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then( Response => {
      console.log("Requisição bem sucedida!");
      alteraPokemons  (Response.data.results);
    })
    .catch( Response => {
      console.log("Deu ruim na requisição");
      console.log(Response);
    })
  }
 // if ( pokemons.length == 0 ){
   // buscaTodosPokemons();
// }  

React.useEffect( ()=>{
  buscaTodosPokemons();
}, [] );

  return (
    <div>
      <h1> Felipe PokéDex </h1>
      <p> Conheça os Pokémons mais famosos </p>

      <input onChange={ (e)=> alteraTxtPokemon( e.target.value ) } placeholder='Digite o nome de um Pokémon'/>
      <button onClick={ ()=> buscaPokemon() }>Buscar</button>
      
      {
        pokemons.map( (pokemon,index) =>
          <div>
            <p> {pokemon.name} </p>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+(index+1)+".gif"}/>
            </div>
          )
      }
    </div>
  );
}

export default App;
