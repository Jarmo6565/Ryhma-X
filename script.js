function myFunction() {
  var name = document.getElementById("etunimi").value;
  var lastname = document.getElementById("sukunimi").value;
  var sleepyes = document.getElementById("unijoo");
  var sleepno = document.getElementById("uniei");
  var car1 = document.getElementById("kulku1");
  var car2 = document.getElementById("kulku2");
  var car3 = document.getElementById("kulku3");
  var feedback = document.getElementById("palaute").value;

  if(name == "") {
  alert("Syötä nimesi");
  return false;
} else if(lastname == "") {
  alert("Syötä sukunimesi");
  return false;
} else if(sleepyes.checked == false && sleepno.checked == false) {
  alert("Valitse nukutko öisin hyvin");
  return false;
} else if(car1.checked == false && car2.checked == false && car3.checked == false) {
  alert("Valitse käyttämäsi kulkuneuvot");
  return false;
} else if(feedback == "") {
  alert("Ole hyvä ja anna meille palautetta");
  return false;
} else {
  alert("Kiitos vastauksestasi!")
}
}
