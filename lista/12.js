/*
Faça um algoritmo que receba como entrada as medidas dos dois catetos de um 
triângulo retângulo e calcule e exiba a medida da hipotenusa e a área do triângulo
*/

let cat1 = prompt("cateto 1: ");
let cat2 = prompt("cateto 2: ");

const hip = Math.sqrt(Math.pow(cat1,2) + Math.pow(cat2,2));
//sqrt = raiz
//pow = potencia(num,elevação)

console.log(hip);