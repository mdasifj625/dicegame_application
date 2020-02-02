function changeDice() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var diceChange1 = ("images/dice" + randomNumber1 + ".svg");
  var diceChange2 = ("images/dice" + randomNumber2 + ".svg");
  document.querySelector("img.img1").setAttribute("src", diceChange1);
  document.querySelector("img.img2").setAttribute("src", diceChange2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩  Player 1 Won!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent ="Player 2 Won!  🚩" ;
  } else {
    document.querySelector("h1").textContent = "Draw!!!!";
  }
}

function resetDice() {
  document.querySelector("h1").textContent = "Roll The Dice";
  document.querySelector("img.img1").setAttribute("src", "images/dice6.svg");
  document.querySelector("img.img2").setAttribute("src", "images/dice6.svg");
}
