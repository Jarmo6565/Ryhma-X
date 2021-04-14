//Arvo voittonumero
var voittoNumero = Math.floor(Math.random()*10 + 1);
//Meneillään oleva arvaus pelin alkaessa
var arvaukset = 1;
//Voitot ja häviöt pelin alussa
var voitot = 0;
var haviot = 0;
console.log(voittoNumero);
function myFunction(numero) {

//Se numero mitä pelaaja klikkaa otetaan kiinni tähän
var pelaajanArvaus = numero.value;

//Jos pelaajan arvaus on oikea vastaus
if (pelaajanArvaus == voittoNumero) {
  document.getElementById("voitto").innerHTML = "Voitit Pelin!";
  //Tän kun linkkaisi sais saman tien voitto ja häviöruutuihin yhden lisää
  voittoRuutu++;
}

// Häviö
if (arvaukset >= 3) {
  document.getElementById("havio").innerHTML = "Hävisit Pelin!";
  //Tän kun linkkaisi sais saman tien voitto ja häviöruutuihin yhden lisää
  havioRuutu++;
}

// Numero on suurempi
if (pelaajanArvaus < voittoNumero) {
  document.getElementById("suuri").innerHTML = "Numero on suurempi!";
  arvaukset++;
}

// Numero on pienempi
if (pelaajanArvaus > voittoNumero) {
  document.getElementById("pieni").innerHTML = "Numero on pienempi!";
  arvaukset++;
}
//Kun ruutuun tulee teksti "Numero on suurempi/pienempi" se häviää
//5 sekunnin kuluessa
$(document).ready(function() {
  $("#suuri").hide(5000);
  $("#pieni").hide(5000);
});

// Laitoin tän osion kommenteiksi jos keksis yksinkertaisemman metodin



//var voitot = 0;
//var haviot = 0;

  /*switch() {
    case 1:
    result = voitto;
    break;
    case 2:
    result = havio;
    break;
  }

document.getElementById("tulokset").innerHTML = result;
    if (result === voitto){
        voitot++;
    } else if (result === havio){
        haviot++;
    }
    document.getElementById("voittoRuutu").innerHTML = voitot;
    document.getElementById("havioRuutu").innerHTML = haviot;*/
}
