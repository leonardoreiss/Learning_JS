/*40)	(STRING) Crie um programa em C que solicite do 
usuário um texto com no máximo 60 caracteres. Solicite 
também quantas letras ele quer mostrar do texto e a partir 
de qual posição. Faça a apresentação desse trecho solicitado 
na ordem direta e na ordem indireta. */

let texto = prompt("Escreve um texto de no máximo 60 caracteres: ");

const lt = prompt("A partir de qual posição deseja ver o texto? ");
texto = texto.slice(lt);
const tam = prompt("quantos caracteres deseja ver do texto? ");
alert(texto.slice(0,tam));

