var plus = "+";
var miinus = "-";
var kerto = "*";
var jako = "/";
var pros  = "%";
var luku = "";

//Lisää napeista haetut arvot/merkit peräkkäin laskimen ruutuun
function lisaa(arvo){
  var arvo = arvo.value;
  var lasku =  luku+=arvo;
  document.getElementById("ruutu").innerText = lasku;
//console.log(lasku);
}

function laske(){
var merkki = document.getElementByName("merkit").value;
var tulos = eval(merkki);
//document.getElemementById("ruutu").value;
console.log(tulos);
}


//Nollaa laskimen ruudun
function tyhjenna(clr){
  var clr = clr.value;
  document.getElementById("ruutu").innerHTML = clr;
}
