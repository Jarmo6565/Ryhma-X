/*function numeroVoittaja(min, max) {
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

  // methods
  difference() {
    return Math.abs(this.pelaajanArvaus - this.voittoNumero)
  }

  isLower() {
    if (this.pelaajanArvaus < this.voittoNumero) {
      return true;
    } else {
      return false;
    }
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
*/

<script language="JavaScript">

function tarkista3(){

	var arvaus = 1*document.getElementById("luku2").value;

	if (arvaus == 3){
		window.alert("Arvasit oikein!");
	}else if (arvaus < 3){
		window.alert("Arvasit liian pienen luvun!");
	}else if (arvaus > 3){
		window.alert("Arvasit liian suuren luvun!");
	}else{
		window.alert("Yritä edes.");
	};
}

</script>

<h4>Arvaa luku 1-10</h4>

<input type="text" id="luku2" value="0" />
<input type="button" value="Arvaa" onClick="tarkista3();" />
