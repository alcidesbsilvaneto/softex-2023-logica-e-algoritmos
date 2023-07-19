const prompt = require("prompt-sync")();

/* Exercício 1: Escreva um programa em JavaScript que solicite
 * ao usuário um número inteiro e exiba na tela se o
 * número é par ou ímpar. */

function exercicio1() {
  const numero = prompt("Digite um numero: ");
  if (numero % 2 === 0) {
    console.log("O número é par");
  } else {
    console.log("O numero é impar");
  }
}

/*  Escreva uma função em JavaScript que receba dois números
 *  inteiros como parâmetros e retorne o maior número entre
 *  eles.
 */

function exercicio2() {
  const numero1 = prompt("Digite um número: ");
  const numero2 = prompt("Digite outro número: ");
  if (numero1 > numero2) {
    console.log(`O maior número digitado foi ${numero1}`);
  } else {
    console.log(`O maior número digitado foi ${numero2}`);
  }
}

/* Escreva um programa em JavaScript que solicite ao
usuário um número inteiro positivo e exiba na tela todo */

function exercicio3() {
  const numero = prompt("Digite um número: ");
  if (numero === 0) {
    console.log("O número digitado é 0");
    return exercicio3();
  } else if (numero < 0) {
    console.log("O número digitado é negativo");
    return exercicio3();
  } else {
    for (let i = 0; i <= numero; i++) {
      if (testarPrimo(i)) console.log(i);
    }
  }
}

function testarPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

/* Escreva uma função em JavaScript que receba um array
de números e retorne a média aritmética desses números. */

function exercicio4() {
  let pedindo = true;
  let numeros = [];
  while (pedindo) {
    const numero = prompt("Digite um número ou digite 'sair' para finalizar: ");
    if (numero === "sair") {
      pedindo = false;
    } else {
      numeros.push(numero);
    }
  }
  let media = numeros.reduce((a, b) => +a + +b, 0) / numeros.length;
  console.log(`A média dos números digitados é ${media}`);
}

exercicio4();
