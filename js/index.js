let timeOutId;
function changeDice() {
	if (timeOutId) clearTimeout(timeOutId);
	const resultText = document.querySelector('.title_result');
	const randomNumber1 = Math.floor(Math.random() * 6 + 1);
	const randomNumber2 = Math.floor(Math.random() * 6 + 1);
	const diceChange1 = 'images/dice' + randomNumber1 + '.svg';
	const diceChange2 = 'images/dice' + randomNumber2 + '.svg';
	document.querySelector('img.img1').setAttribute('src', diceChange1);
	document.querySelector('img.img2').setAttribute('src', diceChange2);

	if (randomNumber1 > randomNumber2) {
		resultText.textContent = '🚩  Player 1 Won!';
	} else if (randomNumber1 < randomNumber2) {
		resultText.textContent = 'Player 2 Won!  🚩';
	} else {
		resultText.textContent = 'Draw!!!!';
	}
	timeOutId = setTimeout(resetDice, 2000);
}

function resetDice() {
	document.querySelector('.title_result').textContent = 'Roll The Dice';
	document.querySelector('img.img1').setAttribute('src', 'images/dice6.svg');
	document.querySelector('img.img2').setAttribute('src', 'images/dice6.svg');
}
