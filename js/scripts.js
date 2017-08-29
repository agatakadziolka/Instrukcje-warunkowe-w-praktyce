// scripts.js

var a = prompt('a = ');
var b = prompt('b = ');

value = (a * a) + (2 * a * b) - (b * b);
console.log(value);
if (value > 0) {
	console.log('Wynik dodatni');
	alert('Wynik dodatni ' + value);
}
else if (value < 0) {
	console.log('Wynik ujemny');
	alert('Wynik ujemny ' + value);
}
else {
	console.log('Wynik jest równy 0');
	alert('Wynik jest równy 0 ' + value);
}
