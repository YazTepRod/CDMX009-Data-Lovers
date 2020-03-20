import data from "./pokemon.js";
import pokemon from "./pokemon.js"; 

export const dataPokemon = data.pokemon;

/* export const getPokemonType = (type) =>
data.pokemon.filter((data) => data.type === type); */


export function onChange(e){
    let value = e.target.id;
    let nuevaListaFiltrada = dataPokemon.filter(p => p.type === (value));
    console.log(nuevaListaFiltrada);
}

