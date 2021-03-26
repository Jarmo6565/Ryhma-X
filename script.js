function myFunction() {
  var name = document.getElementById("etunimi").value;
  var lastname = document.getElementById("sukunimi").value;
  var sleepyes = document.getElementById("unijoo");
  var sleepno = document.getElementById("uniei");
  var car1 = document.getElementById("kulku1");
  var car2 = document.getElementById("kulku2");
  var car3 = document.getElementById("kulku3");
  var feedback = document.getElementById("palaute").value;
  var gender = document.getElementById("sukupuoli").value;

//Jos nimikenttä on tyhjä
  if(name == "") {
  alert("Syötä nimesi");
  return false;
  //Jos sukunimi on tyhjä
} else if(lastname == "") {
  alert("Syötä sukunimesi");
  return false;
  //Jos sukupuoli sarake on tyhjä
} else if(gender == "") {
  alert("Valitse jokin vaihtoehto sukupuoli valikosta");
  return false;
  //Jos nukutko hyvin ei ole vastattu mitään
} else if(sleepyes.checked == false && sleepno.checked == false) {
  alert("Valitse nukutko öisin hyvin");
  return false;
  //Jos kulkuneuvoa ei ole valittu
} else if(car1.checked == false && car2.checked == false && car3.checked == false) {
  alert("Valitse käyttämäsi kulkuneuvot");
  return false;
  //Jos palautetta ei ole annettu
} else if(feedback == "") {
  alert("Ole hyvä ja anna meille palautetta");
  return false;
  //Kun kaikkeen on vastattu tulee kiitos viesti
} else {
  alert("Kiitos vastauksestasi!");
}
}
