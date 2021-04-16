//Arvo voittonumero
var voittoNumero = Math.floor(Math.random()*10 + 1);
//Meneillään oleva arvaus pelin alkaessa
//const isStorage = "undefined" !== typeof localStorage;

//Voitot ja häviöt pelin alussa


function myFunction(numero) {
  switch(numero) {
    case 0, "0":


  var voitot = 0;
  var haviot = 0;
//Se numero mitä pelaaja klikkaa otetaan kiinni tähän
case 1, "1":
case 2, "2":
case 3, "3":
case 4, "4":
case 5, "5":
case 6, "6":
case 7, "7":
case 8, "8":
case 9, "9":
case 10, "10":

var pelaajanArvaus = numero.value;
var arvaukset = 1;

//Jos pelaajan arvaus on oikea vastaus
if (pelaajanArvaus == voittoNumero) {
  document.getElementById("voitto").innerHTML = "Voitit Pelin!";
  voitot++;
  document.getElementById('voittoRuutu').innerHTML  = voitot;
  $(".box2 *").prop("disabled", true);
}

// Häviö (Lisäsin että pelaajanarvaus ei saa kolmannella arvauksellakaan
//olla oikein jotta se ei väitä että tulee samaan aikaan voitto ja häviö)
if (arvaukset >= 3 && pelaajanArvaus != voittoNumero) {
  document.getElementById("havio").innerHTML = "Hävisit Pelin!";
  haviot++;
  document.getElementById('havioRuutu').innerHTML  = haviot;
  $(".box2 *").prop("disabled", true);
}

// Numero on suurempi
if (pelaajanArvaus < voittoNumero) {
  document.getElementById("voitto").innerHTML = "Numero on suurempi!";
  arvaukset++;
}

// Numero on pienempi
if (pelaajanArvaus > voittoNumero) {
  document.getElementById("voitto").innerHTML = "Numero on pienempi!";
  arvaukset++;
}
/*function pelaaUudestaan() {
  if (isStorage && localStorage.getItem("")) {
    elements.scores = localStorage.getItem("").split(",");

    isStorage && localStorage.setItem("", elements.scores);*/
  }
}
