function myFunction() {
  var nimi = document.getElementById("nimi").value
  var sukunimi = document.getElementById("sukunimi").value;

  if(nimi == "") {
  alert("Syötä nimesi");
  return false;
} else if(sukunimi == "") {
alert("Syötä sukunimesi");
return false;
}
}
