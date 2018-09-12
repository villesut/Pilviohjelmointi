function getNumber(id) {
	return parseInt(document.getElementById(id).value);
}

function setResult(result) {
	document.getElementById('result').innerHTML = result;
}

function plus() {
	console.log('first' + firstValue);
	console.log('second');
	setResult(getNumber('firstValue') + getNumber('secondValue'));
}

function mult() {
	setResult(getNumber('firstValue') * getNumber('secondValue'));
}

function substract() {
	setResult(getNumber('firstValue') - getNumber('secondValue'));
}

function divide() {
	setResult(getNumber('firstValue') / getNumber('secondValue'));
}
