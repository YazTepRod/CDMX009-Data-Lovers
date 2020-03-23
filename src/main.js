import data from "./pokemon.js";
import pokemons from "./data.js";

const lista = document.querySelector('#listado');
const catalogue = data.pokemon;
const elementType = document.getElementsByClassName("elementType");
const selectSort = document.getElementById("select");

const typeFilter = document.querySelectorAll(".typeFilter");

catalogue.forEach(poke => {
    lista.appendChild(printData(poke));
})

function printData(pokemon) {
    const namePokemon = document.createElement('div');
    namePokemon.className = "pokedexClass";
    namePokemon.innerHTML = `
        <div  class="card" id="card">
        <img src ="${pokemon.img}">
        <p>${pokemon.num}</p> 
        </p> ${pokemon.name}</p> 
        </p> ${pokemon.type}</p> 
        `
    namePokemon.addEventListener("click", onClickCard);
    return namePokemon;

    function onClickCard(e) {
        let cardSelect = document.querySelectorAll(".pokedexClass");
        let modal = document.querySelector("#myModal");
        let closed = document.querySelectorAll("#close")[0];
        let cardInfo = document.createElement("div");
        let modalInfo = document.querySelector("#infoPoke");

        cardSelect.forEach(openModal => {
            openModal.onclick = function () {
                modal.style.display = "block";
            }
            closed.onclick = function () {
                modal.style.display = "none";
                if (event.target == cardInfo) {
                    modal.style.display = "none";
                }
            }
        })

        modalInfo.innerHTML = ` 
            <p class="namePoke">${pokemon.name}</p>
            <p id="type" class="typePoke"><strong></strong>${pokemon.type}</p>
            <img class="imgPoke" src="${pokemon.img}" />
            <p id="id"><strong>ID =</strong>   ${pokemon.id}</p>
            <p id="type"><strong>Type =</strong>${pokemon.type}</p>
            <p id="heigth"><strong>Heigth =</strong> ${pokemon.heigth}</p>
            <p id="weigth"><strong>Weight =</strong>${pokemon.weight}</p>
            <p id="candy"><strong>Candy =</strong>${pokemon.candy}</p>
            <p id="egg"><strong>Egg =</strong>${pokemon.egg}</p>
            <p id="spawnchance"><strong>Spawn Chance =</strong>${pokemon.spawn_chance}</p>
            <p id="spawntime"><strong>Spawn Time =</strong>${pokemon.spawn_time}</p>
            <p id="multipliers"><strong>Multipliers =</strong>${pokemon.multipliers}</p>
            <p id="weakness"><strong>Weakness =</strong>${pokemon.weaknesses}</p>
            `
        document.querySelector("#cardRotada").appendChild(cardInfo);

    };
}

function printData1(dataType) {
    lista.innerHTML = '';
    dataType.forEach((pokemon) => {
      const namePokemon = `<div  class="card" id="card"><figure> <img = class "imageBox" src ="${pokemon.img}"> </figure>  ${pokemon.num} ${pokemon.name}
      <dt>TYPE: ${pokemon.type} </dt>
      </div>`;
      lista.insertAdjacentHTML('beforeend', namePokemon);
    });
  }

for (let i = 0; i < elementType.length; i += 1) {
    elementType[i].addEventListener('click', () => {
        const elementPokemon = elementType[i].id;
        const pokemonType = pokemons.filterType(elementPokemon);
        printData1(pokemonType);
        selectSort.addEventListener('change', () => {
            const valueSelect = selectSort.value;
            let pokemonsOrdered = [];
            if (valueSelect === 'orderAZ') {
                pokemonsOrdered = pokemons.sortbyNameAZ(pokemonType);
            } else if (valueSelect === 'orderZA') {
                pokemonsOrdered = pokemons.sortbyNameZA(pokemonType);
            } else if (valueSelect === 'defaultOption') {
                pokemonsOrdered = pokemons.sortbyNumber(pokemonType);
            }
            printData1(pokemonsOrdered);
        });
    });
}
selectSort.addEventListener('change', () => {
    const valueSelect1 = selectSort.value;
    let pokemonsOrdered1 = [];
    if (valueSelect1 === 'orderAZ') {
        pokemonsOrdered1 = pokemons.sortbyNameAZ(catalogue);
    } else if (valueSelect1 === 'orderZA') {
        pokemonsOrdered1 = pokemons.sortbyNameZA(catalogue);
    } else if (valueSelect1 === 'defaultOption') {
        pokemonsOrdered1 = pokemons.sortbyNumber(catalogue);
    }
    printData1(pokemonsOrdered1);
});




