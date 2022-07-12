//Exercicio nota escolar 
//Obter a média a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70,70,80];
//C - 75

console.log(mediaDoAluno(array));

function mediaDoAluno(notas)
{
    let tam = array.length;
    let soma = 0, media = 0;
    for(let nota of notas)
    {
        soma = soma + nota;
    }

    media = soma / tam;
        if(media <= 59) return 'F';
        if (media > 59 && media <= 69) return 'D';
        if (media > 69 && media <= 79) return 'C';  
        if (media > 79 && media <= 89) return 'B'; 
        if (media > 89 && media <= 100) return 'A'; 
} 