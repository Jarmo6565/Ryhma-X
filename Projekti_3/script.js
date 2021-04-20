var luku = "";

//Lisää napeista haetut arvot/merkit peräkkäin laskimen ruutuun
function lisaa(arvo){
  var arvo = arvo.value; // Hakee html laskimen nappuloiden arvot ja tallentaa muuttujaan
  var lasku = luku+=arvo; // Lisää edelliseen painettuun arvoon aina seuraavan painalluksen ja tallentaa sen muuttujaan
  document.getElementById("ruutu").innerHTML = lasku; // Näyttää sen kokonaisuudessaan ruudussa
//console.log(lasku);
}

//Hakee ruudusta valuen ja muuntaa sen laskutoimitukseksi
function laske(){
  var nrot = document.getElementById("ruutu").innerHTML; // Hakee html laskimen ruudun sisällön
  var yht = eval(nrot); // Tallentaa sisällön muuttujaan muunnettuaan stringin laskutoimitukseksi
  document.getElementById("ruutu").innerHTML = yht; // Näyttää tuloksen ruudussa
//console.log(yht);
}

// Muuttaa tuloksen desimaaleiksi
function prosentti(){
  var yhteensa = document.getElementById("ruutu").innerHTML; // Hakee html laskimen ruudun sisällön
  var desimaaleiksi = yhteensa / 100; // Muuttaa tuloksen desimaaleiksi
document.getElementById("ruutu").innerHTML = desimaaleiksi; // Näyttää tuloksen ruudussa
}

//Poistaa viimeisen merkin
function poista(){
  var del = document.getElementById("ruutu").innerHTML; // Hakee html laskimen ruudun sisällön
  document.getElementById("ruutu").innerHTML = del.substr(0,del.length -1); // Poistaa ruudun sisällöstä yhden lopusta
  var ruutu = document.getElementById("ruutu").innerHTML; // Tallentaa edellisen muuttujaan
  if (ruutu.length < 1){ // Ehto jos ruudun sisällö pituus meinaa mennä alle yhden niin...
    document.getElementById("ruutu").innerHTML = 0; // ...näkyy ruudussa 0 eikä se tyhjene
    window.location.reload(); // Refreshaa sivun, jotta edellinen laskutoimitus ei jatku
// console.log("böö");
}
}
