/*
Solicitar do usuário 
um número inteiro qualquer e informar se esse número é par ou ímpar. 
*/

const n = parseInt(prompt("numero: "));

n % 2 == 0 ? console.log("Par") : console.log("Impar");