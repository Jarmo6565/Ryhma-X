var luku = "";
var numero = "";

//Lisää napeista haetut arvot/merkit peräkkäin laskimen ruutuun
function lisaa(arvo){
  var arvo = arvo.value;
  var lasku = luku+=arvo;
  document.getElementById("ruutu").innerHTML = lasku;
//console.log(lasku);
}

//Hakee ruudusta valuen ja muuntaa sen laskutoimitukseksi
function laske(){
  var nrot = document.getElementById("ruutu").innerHTML;
  var yht = eval(nrot);
  document.getElementById("ruutu").innerHTML = yht;
//console.log(yht);
}

//Tekee numerosta positiivisen tai negatiivisen
function plusMiinus(){
  var posNeg = document.getElementById("ruutu").innerHTML;
  var negPos = posNeg * -1;
  document.getElementById("ruutu").innerHTML = "-" + negPos;
// console.log(negPos);
}

//Poistaa viimeisen merkin
function poista(){
  var del = document.getElementById("ruutu").innerHTML;
  document.getElementById("ruutu").innerHTML = del.substr(0,del.length -1);
  var ruutu = document.getElementById("ruutu").innerHTML;
  if (ruutu.value == "" || ruutu.length < 1){
    document.getElementById("ruutu").innerHTML = 0;
//console.log("böö");
}
}

//Nollaa laskimen ruudun
/*function tyhjenna(){
  window.location.reload();
}*/
