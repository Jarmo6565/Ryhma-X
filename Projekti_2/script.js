function myFunction() {

var but1 = parseInt(document.getElementById("nappi1").value);
var but2 = parseInt(document.getElementById("nappi2").value);
var but3 = parseInt(document.getElementById("nappi3").value);
var but4 = parseInt(document.getElementById("nappi4").value);
var but5 = parseInt(document.getElementById("nappi5").value);
var but6 = parseInt(document.getElementById("nappi6").value);
var but7 = parseInt(document.getElementById("nappi7").value);
var but8 = parseInt(document.getElementById("nappi8").value);
var but9 = parseInt(document.getElementById("nappi9").value);
var but10 = parseInt(document.getElementById("nappi10").value);

function numeroVoittaja(min, max) {
  min = 1;
  max = 10;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Game {

  constructor() {
    // Pelaajan nykyinen arvaus
    this.pelaajanArvaus = null;
    // Pitää sisällään pelaajan tähänastiset arvaukset
    this.arvaukset = []
    // Arpoo meille voittavan numeron
    this.voittoNumero = numeroVoittaja()
  }


tarkistus() {

    // Voitto
    if (this.pelaajanArvaus === this.voittoNumero) {
      return "Voitit pelin!";
    }

    // Häviö
    if (this.arvaukset.length >= 3) {
      return "Hävisit pelin";
    }

    // Numero on suurempi
    if (Math.abs(this.pelaajanArvaus - this.voittoNumero) < 0) {
      return "Numero on suurempi!"
    }

    // Numero on pienempi
    if (Math.abs(this.pelaajanArvaus - this.voittoNumero) > 0) {
      return "Numero on pienempi!"
    }

  }
}
}






/*
<script language="JavaScript">

function tarkista3(){

  var arvaus = 1*document.getElementById("luku2").value;

  if (arvaus == 6){
    window.alert("Arvasit oikein!");
  }else if (arvaus < 6){
    window.alert("Arvasit liian pienen luvun!");
  }else if (arvaus > 6){
    window.alert("Arvasit liian suuren luvun!");
  }else{
    window.alert("Yritä edes.");
  }
}

</script>

<h4>Arvaa luku 1-10</h4>

<input type="text" id="luku2" value="0" >
<input type="button" value="Arvaa" onClick="tarkista3();" >
*/
