var voittoNumero = Math.floor(Math.random()*10 + 1);
var arvaukset = 1;
console.log(voittoNumero);
function myFunction(numero) {

var pelaajanArvaus = numero.value;


if (pelaajanArvaus == voittoNumero) {
  document.getElementById("voitto").innerHTML = "Voitit Pelin!";
}

// Häviö
if (arvaukset >= 3) {
  document.getElementById("havio").innerHTML = "Hävisit Pelin!";
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
$(document).ready(function() {
  $("#suuri").hide(5000);
  $("#pieni").hide(5000);
});

var voitot = 0;
var haviot = 0;

  switch() {
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
    document.getElementById("havioRuutu").innerHTML = haviot;
}
