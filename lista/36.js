/*
36)	(STRING) Solicitar do usuário dois números de 3 posições cada. 
Apresentar o valor da multiplicação de cada posição de um numero pelo outro.
EX:
123
456
1*4 + 2*5 + 3*6
 */

const n1 = prompt("primeiro numero: ");
const n2 = prompt("segundo numero: ");

let cad1 = n1.split("");
let cad2 = n2.split("");

alert((parseInt(cad1[0] * cad2[0])) + " + " + (parseInt(cad1[1] * cad2[1])) + " + " + (parseInt(cad1[2] * cad2[2])));
alert((parseInt(cad1[0] * cad2[0])) + (parseInt(cad1[1] * cad2[1])) + (parseInt(cad1[2] * cad2[2])));