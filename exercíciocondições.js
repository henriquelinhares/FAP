//Exercício sobre estrutura condicionais da plataforma softex. 

const entrada= require('readline-sync');

let nome; 
    nome = entrada.question("Digite o seu nome: ");
    console.log(`Olá, ${nome}. Bem vindo!`);

let transporte;
    transporte = entrada.question(`${nome}, seu meio de transporte é terrestre? `);

    if(transporte == "sim" || "Sim"){ 
        console.log("Certo, vamos continuar.");
    }else{
        console.log("A pesquisa acaba aqui. Obrigado!");
    } //Como fazer com que a pesquisa realmente termine aqui sem puxar o próximo código?

let capacete; 
    capacete = entrada.question("Seu veículo usa capacete? ")
    
    if(capacete == "sim"){
        console.log(`Obrigado, ${nome}. Seu veículo é uma moto.`);
    } else{
        console.log("Certo, vamos continuar.");
    }
   
