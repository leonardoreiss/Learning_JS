/*
Faça um algoritmo que leia dois números reais e imprima a soma e a média aritmética desses números.
*/

//Escrever o I maiusculo pra dar certo
let a = parseInt(prompt("primeiro numero: "));
let b = parseInt(prompt("segundo numero: "));

const soma = a + b;
const media = soma / 2;

console.log("A soma eh " + soma + " e a media eh " + media);