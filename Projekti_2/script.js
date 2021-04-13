var voittoNumero = Math.floor(Math.random()*10 + 1);
var arvaukset = 1;

function arvauskone () {

  //$(function() {

  //$("#nappi1").hide(1000);
//});


    $("#nappi1").click(function() {
    var btn1 = $(this).val();

    });

    $("#nappi2").click(function() {
      var btn2 = $(this).val();

    });

    $("#nappi3").click(function() {
      var btn3 = $(this).val();

    });

    $("#nappi4").click(function() {
      var btn4 = $(this).val();

    });

    $("#nappi5").click(function() {
      var btn5 = $(this).val();

    });

    $("#nappi6").click(function() {
      var btn6 = $(this).val();

    });

    $("#nappi7").click(function() {
      var btn7 = $(this).val();

    });

    $("#nappi8").click(function() {
      var btn8 = $(this).val();

    });

    $("#nappi9").click(function() {
      var btn9 = $(this).val();

    });

    $("#nappi10").click(function() {
      var btn10 = $(this).val();

    });



}


var pelaajanArvaus = Function ("arvauskone()").val;

function myFunction() {




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





/*    // Voitto
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
