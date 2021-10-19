//For dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var image1source = "images/" + randomDiceImage1;

document.querySelectorAll("img")[0].setAttribute("src", image1source);

//For dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var image2source = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", image2source);

//Heading

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player 1 wins!";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player 2 wins!";
else
document.querySelector("h1").innerHTML="Draw";
