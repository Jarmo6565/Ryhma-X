//Arvo voittonumero
var voittoNumero = Math.floor(Math.random()*10 + 1);


//Voitot, häviöt ja meneillään oleva arvaus pelin alussa
var voitot = 0;
var haviot = 0;
var arvaukset = 1;

function myFunction(numero) {
  numero = numero.value;

  switch(numero) {

    case 0, "0":
// case 0 eli pelaa uudestaan painike arpoo uuden voittonumero, poistaa
//nappien disabled ominaisuuden ja asettaa meneillään olevan arvauksen taas 1:seen
    voittoNumero = Math.floor(Math.random()*10 + 1);

    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = false;
    document.getElementById("9").disabled = false;
    document.getElementById("10").disabled = false;


    arvaukset = 1;


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

//Se numero mitä pelaaja klikkaa otetaan kiinni tähän
var pelaajanArvaus = numero;


//Jos pelaajan arvaus on oikea vastaus
if (pelaajanArvaus == voittoNumero) {
  document.getElementById("voitto").innerHTML = "Voitit Pelin!";
  voitot++;
  document.getElementById('voittoRuutu').innerHTML  = voitot;
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
  document.getElementById("7").disabled = true;
  document.getElementById("8").disabled = true;
  document.getElementById("9").disabled = true;
  document.getElementById("10").disabled = true;
}

// Häviö (Lisäsin että pelaajanarvaus ei saa kolmannella arvauksellakaan
//olla oikein jotta se ei väitä että tulee samaan aikaan voitto ja häviö)
if (arvaukset >= 3 && pelaajanArvaus != voittoNumero) {
  document.getElementById("havio").innerHTML = "Hävisit Pelin!";
  haviot++;
  document.getElementById('havioRuutu').innerHTML  = haviot;
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
  document.getElementById("7").disabled = true;
  document.getElementById("8").disabled = true;
  document.getElementById("9").disabled = true;
  document.getElementById("10").disabled = true;
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
