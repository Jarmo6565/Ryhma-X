var voittoNumero = Math.floor(Math.random()*10 + 1);
var arvaukset = 1;

function arvauskone () {
  if (document.getElementById('nappi1').clicked == true){
  return 1;
}
  else if (document.getElementById('nappi2').clicked == true) {
  return 2;
}
else if (document.getElementById('nappi3').clicked == true) {
return 3;
}
else if (document.getElementById('nappi4').clicked == true) {
return 4;
}
else if (document.getElementById('nappi5').clicked == true) {
return 5;
}
else if (document.getElementById('nappi6').clicked == true) {
return 6;
}
else if (document.getElementById('nappi7').clicked == true) {
return 7;
}
else if (document.getElementById('nappi8').clicked == true) {
return 8;
}
else if (document.getElementById('nappi9').clicked == true) {
return 9;
}
else if (document.getElementById('nappi10').clicked == true) {
return 10;
}
}

function myFunction() {

var pelaajanArvaus = arvauskone();

if (pelaajanArvaus === voittoNumero) {
  document.getElementById("voitto").innerHTML = "Voitit Pelin!";
}

// Häviö
else if (arvaukset >= 3) {
  document.getElementById("havio").innerHTML = "Hävisit Pelin!";
}

// Numero on suurempi
else if (pelaajanArvaus < voittoNumero) {
  document.getElementById("suuri").innerHTML = "Numero on suurempi!";
  arvaukset++;
}

// Numero on pienempi
else {
  document.getElementById("pieni").innerHTML = "Numero on pienempi!";
  arvaukset++;
}
}

//console.log(pelaajanArvaus);
console.log(voittoNumero);
//console.log(arvaukset);





    // Voitto
    if (this.pelaajanArvaus === this.voittoNumero) {
      document.write("Voitit pelin!");
    }

    // Häviö
    if (arvaukset.length >= 3) {
      document.write("Hävisit pelin");
    }

    // Numero on suurempi
    if (Math.abs(this.pelaajanArvaus - this.voittoNumero) < 0) {
      document.write("Numero on suurempi!");
    }

    // Numero on pienempi
    if (Math.abs(this.pelaajanArvaus - this.voittoNumero) > 0) {
      document.write("Numero on pienempi!");
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
