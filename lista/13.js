/*
13)	Dado o valor de um salário e convênio pelo usuário, calcule e exiba os seguintes itens:

a.	INSS – 8% sobre o salario
b.	IRRF – 11% sobre o salario
c.	Convênios – valor gasto com farmácia pelo funcionário
d.	Salario liquido = salario – inss – irrf - convênio
*/

const sal = prompt("Salario: ");
const convenio = prompt("Valor gasto em farma: ");
const inss = (sal * 8) / 100; //porcentagem
const irrf = (sal * 11) / 100; //porcentagem

const liq = sal - convenio - inss - irrf;

console.log(liq);