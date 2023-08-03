// Estrutura de repetição 

/*Estruturas de repetição em JavaScript: while(enquanto), do-while(faça-enquanto) e for(para).
*/
const entrada = require('readline-sync');

/*let solicitandoNumero = entrada.question("Digite até que numero você deseja imprmir: ")
let numero = 1; 
while(numero <= solicitandoNumero){
    console.log(numero);
    numero++
}


let numero2 = 1;
let soma = 0; 
while (numero2 <= 100) {
    console.log(soma = soma + numero2);
    numero2++
} */


/*let contador = 1;

while (contador <= 50) {  //Foi necessario fazer um if para poder efetuar a operação. 
    if (contador % 2 == 0) {
        console.log(contador);
    }
    contador++
    
} */ 


let contador = entrada.question("Digite um número para ser multiplicado por 2: ")


while (contador < 1000) {
    console.log(contador = contador * 2);
       
}





