function myFunction() {
  var nimi = document.getElementById("etunimi").value
  var sukunimi = document.getElementById("sukunimi").value;
  var unijoo = document.getElementById("unijoo");
  var uniei = document.getElementById("uniei");

  if(nimi == "") {
  alert("Syötä nimesi");
  return false;
} else if(sukunimi == "") {
alert("Syötä sukunimesi");
return false;
} else if(unijoo.checked == false && uniei.checked == false) {
  alert("Valitse nukutko öisin hyvin");
  return false;
}
}
