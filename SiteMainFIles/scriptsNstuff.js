function cookieMonster()
{
    alert("Without his cookies he's just a monster accept them")
}

function ifBitsHappen(){
    var input = getElementbyId("button_name")
    if (input > 5)
        alert("That number was more than 5")
    else (input < 5)
        alert("That number was less that 5")

}

function helloWorld(){
    document.getElementById("demo").innerHTML = ("HAPPY BIRTHDAY EMMA");
  	document.getElementsByTagName("P").innerHTML = ("HAPPY BIRTHDAY EMMA");
    document.getElementsByTagName("H2").innerHTML = ("HAPPY BIRTHDAY EMMA");
  	document.getElementsByTagName("H3").innerHTML = ("HAPPY BIRTHDAY EMMA");
    document.getElementsByTagName("H1").innerHTML = ("HAPPY BIRTHDAY EMMA");
}

function myFunction() {
    var text;
    var favDrink = prompt("What's your favorite cocktail drink?", "Daiquiri");
    switch(favDrink) {
      case "Martini":
        text = "Excellent choice. Martini is good for your soul.";
        break;
      case "Daiquiri":
        text = "Daiquiri is my favorite too!";
        break;
      case "Cosmopolitan":
        text = "Really? Are you sure the Cosmopolitan is your favorite?";
        break;
      default:
        text = "I have never heard of that one..";
    }
    document.getElementById("demo").innerHTML = text;
  }
