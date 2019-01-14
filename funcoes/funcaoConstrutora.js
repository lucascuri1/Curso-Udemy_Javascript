// Paradigma OO (Orientação a Objetos);
// Retornando atributos privados através do this (somente funciona com functions comuns, e não arrow, devido ao comportamento do this na function arrow).


function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0;

  // método público
  this.acelerar = function() {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  }

  // método público para retornar um atributo privado
  this.getVelocidadeAtual = function() {
    return velocidadeAtual;
  }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
