export const poke = {
    dataPokemon : function (){ 

let section = document.querySelector("#listPokemon");

let requestURL= "./pokemon.json"; // url esta bien?
let request = new XMLHttpRequest(); // probar sin este, por que no tenemos que jalar info de un servidor 
request.open("GET", requestURL);
request.responseType ="json";
request.send();

request.onload = function(){
    let cataloguePokemon = request.response;
    showPokemon (cataloguePokemon); 
}

function showPokemon (jsonObj){
    let pokemones = jsonObj["pokemon"];

    for (let i= 0; i< pokemones.length; i++){
        let myArticle = document.createElement("article");
        let myH2 = document.createElement("h2");
        let myPara1 = document.createElement("p");
        let myPara2 = document.createElement("p");
        let myPara3 = document.createElement("p");


        myH2.textContent = pokemones[i].name; //name?
        myPara1.textContent = "Tipo: " + pokemones[i].type;
        myPara2.textContent = "Numero de Pokemón " + pokemones[i].num;
        myPara3.textContent = "Id: " + pokemones[i].id;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        section.appendChild(myArticle);
    }
  }
   }
} 




// import data from './data/pokemon/pokemon.js'
// esta es una función de ejemplo
/*
export const example = () => {
  return 'example';
};*/
/*
var section = document.querySelector("section");

var requestURL= "./pokemon.json"; // url esta bien?
var request = new XMLHttpRequest(); // probar sin este, por que no tenemos que jalar info de un servidor.
request.open("GET", requestURL);
request.responseType ="json";
request.send();

request.onload = function(){
    var cataloguePokemon = request.response;
    showPokemon (cataloguePokemon); 
}

function showPokemon (jsonObj){
    var pokemones = jsonObj["pokemon"];

    for (var i= 0; i< pokemones.length; i++){
        var myArticle = document.createElement("article");
        var myH2 = document.createElement("h2");
        var myPara1 = document.createElement("p");
        var myPara2 = document.createElement("p");
        var myPara3 = document.createElement("p");


        myH2.textContent = pokemones[i].name; //name?
        myPara1.textContent = "Tipo: " + pokemones[i].type;
        myPara2.textContent = "Numero de Pokemón " + pokemones[i].num;
        myPara3.textContent = "Id: " + pokemones[i].id;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        section.appendChild(myArticle);
    }
  }
*/
