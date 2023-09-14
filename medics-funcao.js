const readline = require("readline-sync");

pesquisaIDExcluir = readline.questionInt("Digite o ID do médico que deseja excluir:");
            for (const m of medicos) {
                if (m.id === pesquisaIDExcluir) {
                    console.log(`\n O Id é referente ao médico ${m.nome}`);
                    console.log("-------------------------------");
                    console.log(`Excluindo o médico ${m.nome} do sistema..."`);
                    console.log("-------------------------------");
                    medicos.splice(medicos.indexOf(m),1);
                    
                }
            }
            console.log("Médico excluído com sucesso!");
            readline.keyInPause();
            break;


function excluir(m){
    pesquisaIDExcluir = readline.questionInt("Digite o ID do médico que deseja excluir:");
    for (const m of medicos) {
        if (m.id === pesquisaIDExcluir) {
            console.log(`\n O Id é referente ao médico ${m.nome}`);
            console.log("-------------------------------");
            console.log(`Excluindo o médico ${m.nome} do sistema..."`);
            console.log("-------------------------------");
            medicos.splice(medicos.indexOf(m),1); 
        }
    }
    console.log("Médico excluído com sucesso!");
    readline.keyInPause();
}