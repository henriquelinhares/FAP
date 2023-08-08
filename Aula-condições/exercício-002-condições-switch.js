// Aula condições. Segunda parte. 

/* Condição multipla. Essa condição é fundamental quando se tem valores fixos. 
   O switch é muito importate para se testar valores pontuais, não intervalos. Ele funciona com números
   inteiros e com strings. Switch é mais limitado, mas muito util em situações pontuais.  
   Se precisar testar intervalos o melhor é utilizar o if else.

   Temos o comando switch(expressão){}. 
*/

//Exemplo 

let agora = new Date();
let diaSemana = agora.getDay();

switch (diaSemana) {
    case 0:
        console.log("Olá, hoje é domingo.");
        break;
    case 1: 
        console.log("Olá, hoje é segunda feira.");
        break
    case 2: 
        console.log("Olá, hoje é terceira feira.");
        break
    case 3: 
        console.log("Olá, hoje é quarta feira.");  
        break
    case 4: 
        console.log("Olá, hoje é quinta feira.");
        break
    case 5: 
        console.log("Olá, hoje é sexta feita.");
        break
    case 6:
            console.log("Olá, hoje é sábado.");
            break
    default:
        break;
}
