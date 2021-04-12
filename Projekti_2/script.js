
function myFunction() {

var voittoNumero = Math.ceil(Math.random() * 10);
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
var arvaukset = 0;

    but1.onclick = function klikkaus() {
    arvaukset++;
    disp.innerHTML = arvaukset;
    }
    but2.onclick = function klikkaus() {
    arvaukset++;
    disp.innerHTML = arvaukset;
    }
    but3.onclick = function klikkaus() {
    arvaukset++;
    disp.innerHTML = arvaukset;
    }
    but4.onclick = function klikkaus() {
    arvaukset++;
    disp.innerHTML = arvaukset;
    }
    but5.onclick = function klikkaus() {
    arvaukset++;
    disp.innerHTML = arvaukset;
    }
    but6.onclick = function klikkaus() {
    arvaukset++;
    disp.innerHTML = arvaukset;
    }
    but7.onclick = function klikkaus() {
    arvaukset++;
    disp.innerHTML = arvaukset;
    }
    but8.onclick = function klikkaus() {
    arvaukset++;
    disp.innerHTML = arvaukset;
    }
    but9.onclick = function klikkaus() {
    arvaukset++;
    disp.innerHTML = arvaukset;
    }
    but10.onclick = function klikkaus() {
    arvaukset++;
    disp.innerHTML = arvaukset;
    }




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
