function myFunction(){
/* KOPIO open koodista, ei hajua miten ja mihin s-postihomma laitetaan ??
 function emailIsValid (email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }*/

  var name = document.getElementById('nimi').value;
  var sahkoposti = document.getElementById('email').value;
  var age = parseInt(document.getElementById('ika').value);


  //Nimikenttä
  if (name == ""){
    document.getElementById('jostyhja').innerHTML = "Nimikenttä on tyhjä";
  }else if (name.length <= 5){
    document.getElementById('joslyhyt').innerHTML = "Antamasi nimi on liian lyhyt";
    return false;
  //S-postikenttä
/* KOPIO open koodista, ei hajua miten s-postihomma laitetaan ??
if(emailIsValid(sahkoposti)){
  }else{ alert("Anna oikea sÃ¤hkÃ¶postiosoitteesi");
 lomake.email.focus();
 return (false);
}*/
  //Ikäkenttä
  }else if (isNaN(age)){
    document.getElementById('einumero').innerHTML = "Anna ikäsi numeroina";
    return false;
  }
  }
