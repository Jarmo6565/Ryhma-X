function myFunction(){

  var name = document.getElementById('nimi').value;
  var sahkoposti = document.getElementById('email').value;
  var age = parseInt(document.getElementById('ika').value);
  var name;

/*

<p id="name"></p>
  if (confirm("Do you want to save changes?") == true) {
    userPreference = "Data saved successfully!";
  } else {
      userPreference = "Save Cancelled!";
  }
document.getElementById("name").innerHTML = userPreference;
*/

  //Nimikenttä
  if (name.length <= 5){
    document.getElementById('joslyhyt').innerHTML = "Antamasi nimi on liian lyhyt";
    return false;

  //S-postikenttä
  function emailIsValid (email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
  if (emailIsValid(sahkoposti)){
  }else{
  document.getElementById('sposti').innerHTML = "Tarkista sähköpostiosoite";
  lomake.email.focus();
    return false;
  }
  //Ikäkenttä
  if (isNaN(age) || age < 18 || age > 25){
    document.getElementById('einumero').innerHTML = "Syötä ikäsi oikein";
    return false;
    }
  }
