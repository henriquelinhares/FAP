// Aula condições. Segunda parte. 

/* Condição multipla. Essa condição é fundamental quando se tem valores fixos. 
    switch.
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
