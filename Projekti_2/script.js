var voittoNumero = Math.floor(Math.random()*10 + 1);
var arvaukset = 1;

function myFunction() {

  $('[name=nappi]').click(function() {
  var pelaajanArvaus = $(this).val();

});

if (this.pelaajanArvaus === voittoNumero) {
  document.getElementById("voitto").innerHTML = "Voitit Pelin!";
}

// Häviö
else if (arvaukset >= 3) {
  document.getElementById("havio").innerHTML = "Hävisit Pelin!";
}

// Numero on suurempi
else if (this.pelaajanArvaus < voittoNumero) {
  document.getElementById("suuri").innerHTML = "Numero on suurempi!";
  arvaukset++;
}

// Numero on pienempi
else {
  document.getElementById("pieni").innerHTML = "Numero on pienempi!";
  arvaukset++;
}
}

console.log(pelaajanArvaus);
console.log(voittoNumero);
console.log(arvaukset);
