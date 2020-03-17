import data from "./pokemon.js";
//import pokemon from "./pokemon.js";

//Devuelve el primer elemento que es #allThePokemones.
let list = document.querySelector ('#allThePokemones')

let catalogue1= data.pokemon;

//Mostramos en consola los arrays
console.log (catalogue1);

//Se diseña la tarjeta donde se mostrarán los pokémones
function generatePokeCard(pokemon){
  let  div = document.createElement ('div')
  div.innerHTML = `
  <div class="card">
  <img src="${pokemon.img}"/>
  <p>${pokemon.id}</p>
  <p><p>${pokemon.name}</p>
  <p>${pokemon.type}</p>
  <p>${pokemon.weaknesses}</p>
  </div>
  `
  return div
}

// 1.- recorrer (for each)
catalogue1.forEach(poke=>{
  //2.- dibujar cada card 
  //3.- colocar!!!!!! cada card en la lista
  list.appendChild(generatePokeCard(poke))
  });

//Ordenar los datos 
document.getElementById('orderpokemon').addEventListener('click', (evt)=>{
const selectedIndex = evt.currentTarget.selectedIndex;
if (selectedIndex === 3){
   catalogue1(list.sort(poke, 'name', 'A-Z'));
}else if (selectedIndex === 4) {
  catalogue1(list.sort(poke, 'name', 'Z-A'));
} else if (selectedIndex === 2) {
  catalogue1(list.sort(poke, 'number', 'asc'));
} else if (selectedIndex === 1) {
  catalogue1(list.sort(poke, 'number', 'des'));
} 
});

document.getElementById('typepokemon').addEventListener('change', (evt) => {
  const selectedIndex = evt.currentTarget.selectedIndex;
  if (selectedIndex === 1) {
    catalogue1(list.filterData(poke, 'Water'));
  } else if (selectedIndex === 2) {
    catalogue1(list.filterData(poke, 'Bug'));
  } else if (selectedIndex === 3) {
    catalogue1(list.filterData(poke, 'Dragon'));
  } else if (selectedIndex === 4) {
    catalogue1(list.filterData(poke, 'Electric'));
  } else if (selectedIndex === 5) {
    catalogue1(list.filterData(poke, 'Ghost'));
  } else if (selectedIndex === 6) {
    catalogue1(list.filterData(poke, 'Fire'));
  } else if (selectedIndex === 7) {
    catalogue1(list.filterData(poke, 'Ice'));
  } else if (selectedIndex === 8) {
    catalogue1(list.filterData(poke, 'Fighting'));
  } else if (selectedIndex === 9) {
    catalogue1(list.filterData(poke, 'Normal'));
  } else if (selectedIndex === 10) {
    catalogue1(list.filterData(poke, 'Grass'));
  } else if (selectedIndex === 11) {
    catalogue1(list.filterData(poke, 'Psychic'));
  } else if (selectedIndex === 12) {
    catalogue1(list.filterData(poke, 'Rock'));
  } else if (selectedIndex === 13) {
    catalogue1(list.filterData(poke, 'Ground'));
  } else if (selectedIndex === 14) {
    catalogue1(list.filterData(poke, 'Poison'));
  } else if (selectedIndex === 15) {
    catalogue1(list.filterData(poke, 'Flying'));
  } 
});

//Tarjeta para visualizar más información sobre el pokémon 
let lista = document.querySelector('#lista');
let catalogue = data.pokemon;

catalogue.forEach(poke => {
    lista.appendChild(generateCard(poke));
})

function generateCard(pokemon) {
    let container = document.createElement('div');
    container.id = "pokedex";
    container.className = "pokedexClass"// id a el conteneder de cada pokemon, para poder usar un listener y abrir la tarjeta con informacion  pokemon.name
    container.innerHTML = ` 
    <div id="cardPoke" class="card">
    <img src="${pokemon.img}" />
    <p>${pokemon.name}</p>
    </div>
    `
    container.addEventListener("click", onClickCard);
    return container;


    function onClickCard(e) {
        let cardSelect = document.querySelectorAll(".pokedexClass");
        let modal = document.querySelector("#myModal");
        let closed = document.querySelectorAll("#close")[0];
        let cardInfo = document.createElement("div");
        let modalInfo = document.querySelector("#infoPoke");

        cardSelect.forEach(openModal => { //toma el pokemon al que damos click y a cada uno le despliega el modal
            openModal.onclick = function () { //abre modal
                modal.style.display = "block";
            }
            closed.onclick = function () {     // cierra modal
                modal.style.display = "none"; // revisar por que no cierra, no funciona el boton
            }
            window.onclick = function (event) { //cierra modal
                if (event.target == cardInfo) {
                    modal.style.display = "none";
                }
            }
        })

        modalInfo.innerHTML = ` 
        <p>${pokemon.name}</p>
        <img src="${pokemon.img}" />
        <p><strong>ID =</strong>   ${pokemon.id}</p>
        <p><strong>Heigth =</strong> ${pokemon.heigth}</p>
        <p><strong>Weight =</strong>${pokemon.weight}</p>
        <p><strong>Candy =</strong>${pokemon.candy}</p>
        <p><strong>Egg =</strong>${pokemon.egg}</p>
        <p><strong>Spawn Chance =</strong>${pokemon.spawn_chance}</p>
        <p><strong>Spawn Time =</strong>${pokemon.spawn_time}</p>
        <p><strong>Multipliers =</strong>${pokemon.multipliers}</p>
        <p><strong>Weakness =</strong>${pokemon.weaknesses}</p>
        `
        document.querySelector("#cardRotada").appendChild(cardInfo);
        console.log(cardInfo);
    }
}