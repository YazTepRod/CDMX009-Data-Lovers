import data from "./pokemon.js";

let lista = document.querySelector('#listPokemon')

let catalogue = data.pokemon;
console.log(catalogue);

function generateCard(pokemon){
    let div = document.createElement('div')
    div.innerHTML = `
    <div class="card">
    <img src="${pokemon.img}" />
    <p>${pokemon.name}</p>
    </div>
    `
    return div
}

// 1.- recorrer (for each)
catalogue.forEach(poke=>{
//2.- dibujar cada card 
//3.- colocar!!!!!! cada card en la lista
lista.appendChild(generateCard(poke))
})




// 4.- Listeners de click ----