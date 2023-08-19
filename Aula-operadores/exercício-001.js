// Aula de operadores

// Operadores aritméticos: + - * / % ** 
    /* 5 + 2 = 7 
       5 - 2 = 3
       5 * 2 = 10 multiplicação
       5 / 2 = 2,5 divisão normal
       5 % 2 = 1  O símbolo de % realiza o cálculo para obter o resto da divisão entre os números. 
       5 ** 2 = 25 Dois símbolos de ** é para calcular a potencia/elevar ao quadrado. 
    */

    /* 5 + 3 / 2 = 6,5 Em javascript primeiro é realizado a divisão e depois a soma. 
       Caso a gente queira primeiro realizar a soma em vez da divisão, vamos separar os números dentro de parenteses.
       exemplo: (5 + 3) / 2 = 4

       Isso se dar por conta da ordem de prececência do javascript.  

       Primeiro analisa o que estiver dentro dos parenteses (). 
       Depois são as potências **
       Em terceiro são a multiplicação *, divisão / e resto da divisão %. Aqui os três estão no mesmo nivel
       e quando temos operadores do mesmo nivel na expressão, resolve primeiro seguinda da esquerda para a direita.
       E por último adição + e subtração - . Também seguem o esquema da esquerda para a direita.  
    */

       var a = 5 + 3;
       var b = a % 5; 
       var c = 5 * b ** 2; 
       var d = 10 - a / 2; 
       var e = 6 * 2 / d; 
       var f = b % e + 4 / e; 
   
       console.log(a, b , c, d, e, f);
   
       /* Também temos Auto atribuiçôes 
   
           Exemplo: var n = 3; O valor de n é 3. 
                        n = n + 4; Agora o valor de n passa a ser 7. 
                        n = n - 5; Agora n passa a ser 2. 
          
           Nós podemos fazer essa atribuição de forma simplificada. 
   
           exemplo: var n = 3; 
                        n += 4; Aqui o valor de n passa a ser 7. Porem o += só serve se a mesma variavel receber
                        ela + outro valor. Se for n = x + 4 não funciona. 
       */
   
       var num = 8; 
           num += 2; 
       
       var num2 = 7; 
           num2 -= 3; 
   
       var num3 = 5; 
           num3 *= 2; 
   
       console.log(num, num2, num3);
   
   
       // Operadores de incremento
   
           /* Os operadores de incremento também servem para simplificar. 
   
               exemplo: var x = 10; 
                            x = x + 2; Agora o valor de x passa a ser 12; 
                            x += 2; Agora o valor de x passa a ser 14; 
                            Isso aqui nós vimos anteriormente. 
               
               Como os operadores de incremento, vai ficar: 
           
               exemplo: var x = 10; 
                            x ++; Agora o valor de x passa a ser 11. 
                            x --; Agora o valor de x volta a ser 10. 
           
           */
   
       var x = 10; 
           x++ 
           x--
       
           console.log(x);