
import   { poke }  from "./data.js";
let data = './pokemon.json'
/* const pokemonArr = pokemon 
const pokemons= pokemon.pokemon 
pokemons.map(pokes =>console.log(pokes.pokemon));
 */


friend.onclick = function(){
    document.getElementById("listPokemon").value = poke.showPokemon (data);
    document.getElementById("listPokemon").innerHTML = poke.showPokemon (data);
}
 




/* 
document.getElementById('log-in').addEventListener('click',()=>{
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('list').style.display = 'none'; 
    document.getElementById('pokemon-centers').style.display = 'none';
    document.getElementById('pokemon-file').style.display = 'none';
}) */