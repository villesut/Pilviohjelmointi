var attempts = 1;
let targetNumber = Math.floor(Math.random() * 10) + 1;
console.log('Answer: ' + targetNumber);

var submit = document.getElementById('submit'),
	guess = document.getElementById('guess'),
	input = document.getElementById('input'),
	message = document.getElementById('message'),
	replay = document.getElementById('replay');
window.onload = init();
function init() {
	submit.onclick = function(e) {
		console.log(e);
		e.preventDefault();
		check(guess);
	};
}

function check(input) {
	if (input.value == targetNumber) {
		showWin(targetNumber);
	} else if (input.value != targetNumber && attempts < 5) {
		showError();
	} else {
		showLoss(targetNumber);
	}
}

function showWin(target) {
	message.innerHTML = target + ' You win!';
	message.className = 'green';
	allowReplay();
}

function showError() {
	console.log('Try Again', attempts);
	message.innerHTML = attempts + ' attempts. Try again! Guess a number between 1 and 10';
	attempts++;
}

function showLoss(target) {
	console.log('You lose! ' + target);
	message.innerHTML = target + ' You lose!';
	message.className = 'red';
	allowReplay();
}
function allowReplay() {
	input.className += 'hidden';
	guess.value = '';
	replay.className = '';
	replay.onclick = function(e) {
		e.preventDefault();
		message.className = '';
		input.className = '';
		message.innerHTML = 'Guess a number between 1 and 10';
		attempts = 1;
		targetNumber = Math.floor(Math.random() * 10) + 1;
	};
}

init();
