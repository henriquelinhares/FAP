//Exercício sobre estrutura condicionais da plataforma softex. 

const entrada= require('readline-sync');

let nome; 
    nome = entrada.question("Digite o seu nome: ");
    console.log(`Olá, ${nome}. Bem vindo!`);

let transporte;
    transporte = entrada.question(`${nome}, seu meio de transporte é terrestre? `);
    
    if(transporte == "sim" || transporte == "Sim"){
        console.log("Certo. Vamos continuar.");  
    } else if(transporte == "não" || transporte == "Não"){
        console.log("Certo. Nossa pesquisa encerra aqui.");
    } else{
        console.log("Resposta incorreta.")
    }

let capacete;
    capacete = entrada.question("Seu veiculo usa capacete? ")

    if(capacete == "sim" || capacete == "Sim"){
        console.log(`Certo, ${nome}! Seu veiculo é uma moto.`)
    } else if(capacete == "não" || capacete == "Não"){
        console.log("Certo, vamos continuar.");
    } else{
        console.log("Resposta incorreta.");
    }

let umaPessoa; 
    umaPessoa = entrada.question("Seu veículo cabe apenas uma pessoa? ")

    if(umaPessoa == "sim" || umaPessoa == "Sim"){
        console.log("Certo, vamos continuar.")
    } else if(umaPessoa == "não" || umaPessoa == "Não"){
        console.log(`Obrigado, ${nome}. Nossa pesquisa termina aqui.`);
    } else {
        console.log("Resposta incorreta.");
    }

let pesado;
    pesado = entrada.question("Seu veículo é pesado? ")

    if(pesado == "sim" || pesado == "Sim"){
        console.log(`Certo, ${nome}. Seu veiculo é um trator.`);
    } else if(pesado == "não" || pesado == "Não"){
        console.log("Certo. Vamos continuar.")
    } else{
        console.log("Resposta incorreta.");
    } 

let pedais;
    pedais = entrada.question("Seu veiculo usa pedal? ")

    if(pedais == "sim" || pedais == "Sim"){
        console.log(`Certo, ${nome}. Seu veiculo é uma bicicleta.`);
    } else if(pedais == "não" || pedais == "Não"){
        console.log(`Desconhecemos o seu veiculo, ${nome}.`);
    } else{
        console.log("Resposta incorreta.");
    }

    
    
    console.log(`Obrigado por responder nossa pesquisa, ${nome}. Até logo.`);
    
   
