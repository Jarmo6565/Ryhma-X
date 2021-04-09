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
