const entrada= require('readline-sync');

let nome; 
    nome = entrada.question("Digite o seu nome: ");
    console.log(`Olá, ${nome}. Bem vindo!`);

let diaSemana;
    diaSemana = entrada.question("Digite o dia da semana que você quer saber: ")
switch (diaSemana){
    case "Segunda feira": console.log("Esse é o primeiro dia da semana.");
    break
    case "Terça feira": console.log("Esse é o segundo dia da semana.");
    break
    case "Quarta feira": console.log("Esse é o terceiro dia da semana.");
    break
    case "Quinta feira": console.log("Esse é o quarto dia da semana.");
    break
    case "Sexta feira": console.log("Esse é o quinto dia da semana.");
    break
    case "Sabado": console.log("Esse é o sexto dia da semana.");
    break
    case "Domingo": console.log("Esse é o setimo dia da semana.");
    break
    default: console.log("Valor invalido");
}

let mes;
    mes = entrada.question("Digite o número de um mês do ano: ")

    switch(mes){
        case "1": console.log("Este é o mes de janeiro.");
        break
        case "2": console.log("Este é o mês de fevereiro.");
        break
        case "3": console.log("Este é o mês de março.");
        break
        case "4": console.log("Este é o mês de abril.");
        break
        case "5": console.log("Este é o mês de maio.");
        break
        case "6": console.log("Este é o mes de junho.");
        break
        case "7": console.log("Este é o mês de julho.");
        break
        case "8": console.log("Este éo mês de agosto.");
        break
        case "9": console.log("Este é o mês de setembro.");
        break
        case "10": console.log("Este é o mês de outubro.");
        break
        case "11": console.log("Este é o mês de novembro.");
        break
        case "12": console.log("Este é o mês de dezembro.");
        break
        default: console.log("Valor invalido.");
    }

let estadoCivil;
    estadoCivil = entrada.question("Qual o seu estado cívil? ")

    switch(estadoCivil){

        case ""
        }
        
    

















