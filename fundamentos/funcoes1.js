// Função sem retorno
function imprimirSoma(a, b) {
	console.log(a + b);
}

imprimirSoma(3, 2);
imprimirSoma(2);
imprimirSoma(2,3,4,5,6,7,8);
imprimirSoma();

// Função com retorno
function soma(a, b = 1) {
	return a + b;
}

console.log(soma(3,2));
console.log(soma(3));
console.log(soma());