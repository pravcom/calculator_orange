/**
 * 
 */

let a = ''; // первое число
let b = ''; //второе число
let sign = ''; //знак
let finish = false; //флаг конца вычеслений

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
const action = ['+', '-', '/', 'X'];
//экран
const out = document.querySelector('.screen');
console.log(out);

function clearAll() {
	a = ''; // первое число
	b = ''; //второе число
	sign = ''; //знак
	finish = false; //флаг конца вычеслений
	out.textContent = 0
}

function limitStr(str, n) {
    if (!n) return str;
    return str.substr(0, n)
}

//document.querySelector('.ac').onclick = clearAll();

document.querySelector('.buttons').onclick = (event) => {
	//нажата не кнопка
	if (!event.target.classList.contains('btn')) return;
	//нажата clearAll
	if (event.target.classList.contains('ac')) clearAll();

	out.textContent = '';
	// получаю нажатую кнопку
	const key = event.target.textContent;
	// Если нажата 0-9
	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a += key;
			out.textContent = limitStr(a, 14);
		}
		else if (a !== '' && b !== '' && finish) {
			b = key;
			finish = false;
			out.textContent = limitStr(b, 14);
		}
		else {
			b += key;
			out.textContent = limitStr(b, 14);
		}
		console.log(a, b, sign);
		return;
	}
	// Если нажата +-/X
	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		console.log(a, b, sign);
		return;
	}
	if (key === '=') {
		if(b ==='') b = a;
		switch (sign) {
			case "+":
				a = (+a) + (+b);
				break;
			case "-":
				a = a - b;
				break;
			case "X":
				a = a * b;
				break;
			case "/":
				a = a / b;
				break;
		}
		finish = true;
		out.textContent = a.toString().substring(0, 14);
		console.log(a, b, sign);
	}
}
