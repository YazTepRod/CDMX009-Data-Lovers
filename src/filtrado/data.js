import data from "./pokemon.js";
import pokemon from "./pokemon.js"; 


// primera opcion para hacer filtrado
export const getPokemonType = (type) =>
data.pokemon.filter((data) => data.type === type);

//segunda opcion para hacer el filtrado

/* export function onChange(e){
    let value = e.target.id;
    let nuevaListaFiltrada = dataPokemon.filter(p => p.type === (value));
    console.log(nuevaListaFiltrada);
} */

