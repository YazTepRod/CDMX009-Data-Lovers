import data from "./pokemon.js";
import pokemon from "./pokemon.js";

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
