function myFunction(){

  var name = document.getElementById('nimi').value;
  var sahkoposti = document.getElementById('email').value;
  var age = parseInt(document.getElementById('ika').value);


  //Nimikenttä
  if (name.length <= 5){
    document.getElementById('joslyhyt').innerHTML = "Antamasi nimi on liian lyhyt";
    return false;
}
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
  if (isNaN(age)){
    document.getElementById('einumero').innerHTML = "Anna ikäsi numeroina";
    return false;
    }
  }
