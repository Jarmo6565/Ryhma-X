//Arvo voittonumero
var voittoNumero = Math.floor(Math.random()*10 + 1);
//Meneillään oleva arvaus pelin alkaessa
var arvaukset = 1;
//Voitot ja häviöt pelin alussa
var voitot = 0;
var haviot = 0;

function myFunction(numero) {

//Se numero mitä pelaaja klikkaa otetaan kiinni tähän
var pelaajanArvaus = numero.value;

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
function pelaaUudestaan() {
  //Arvo voittonumero
  var voittoNumero = Math.floor(Math.random()*10 + 1);
  //Meneillään oleva arvaus pelin alkaessa
  var arvaukset = 1;
  //$(".box2 *").prop("disabled", false);
}
}
