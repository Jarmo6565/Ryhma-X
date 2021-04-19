
function lisaa(arvo){
  var arvo = arvo.value;
  document.getElementById("ruutu").innerText = arvo;
//console.log(arvo);
}

function laske(){
var x = document.getElementById("ruutu").value
var y = eval(x)
document.getElementById("ruutu").value = y
}

function tyhjenna(clr){
  var clr = clr.value;
  document.getElementById("ruutu").innerHTML = clr;
}
