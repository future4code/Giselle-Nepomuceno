

/*  1 -

   a. False 
   b. False
   c. True 
   e. Boolean 


*/

/* 2. 
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9


*/

/* 3. 
Faça um programa que:
a. Pergunte a idade do usuário
b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
 Imprima na tela a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
d. Imprima na tela a diferença de idade (não tem problema se sair um número negativo)

let ageUser = prompt('Qual a sua idade?');
let ageFriend = prompt('Qual a idade do seu/sua melhor amigo(a)?');
let ageplus = ageUser > ageFriend
let agedif = ageUser - ageFriend
console.log('Sua idade é maior do que seu melhor amigo?', ageplus)
console.log(agedif)

*/

/* 4. 
a. Peça ao usuário que insira um número par.
b. Imprima na tela o resto da divisão desse número por 2.

let par = prompt('Insira um número par');
let rest = par % 2;
console.log(rest)

c. Teste o programa com diversos números pares. Você notou um padrão? 
Sim, há um padrão porque a divisão de todo número par por 2 é igual a 0 já que é divido de forma igual. Logo não ha restos.
d. O que acontece se o usuário inserir um número ímpar?
O resto é igual 1 mesmo que mude o número impar.

*/
 
/* 
5. Faça um programa, seguindo os passos:
a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia
 e armazene-as, uma por uma, no array
c. Imprima o array na tela
d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
e. Remova da lista o item de índice que o usuário escolheu.
f. Imprima o array na tela

let listaDeTarefas = [];
let tarefa1 = prompt('Digite 1 tarefa que você tem que realizar durante o dia');
let tarefa2 = prompt('Digite outra tarefa que você tem que realizar durante o dia');
let tarefa3 = prompt('Digite mais umab tarefa que você tem que realizar durante o dia');

listaDeTarefas.push(tarefa1)

listaDeTarefas.push(tarefa2)

listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let done = prompt('Diga qual tarefa você realizou? 0- a primeira, 1- a segunda, 2 - a terceira');
listaDeTarefas.splice(done, 1)

console.log(listaDeTarefas)
*/

/*Faça um programa que pergunte ao usuário seu nome e seu e-mail.
 Em seguida, imprima na tela a seguinte mensagem:
 O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
 
 let nome = prompt('Qual seu nome?')
 let mail = prompt('Qual seu email?')

console.log('O e-mail', mail, 'foi cadastrado com sucesso. Seja bem-vinda(o),', nome)
    */

    /* Desafio */

    /* 1.
    (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15

    (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

    a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também
            let fahrenheit = 77
            let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15
            console.log(kelvin)

    b.  Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
            let c = 80
            let f = c *9/5 + 32
            console.log(f)
    c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
           let c = 30
            let f = c *9/5 + 32
            console.log(f) 
            let k = (f - 32) * 5 / 9 + 273.15
            console.log(k)  
            
    d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
            let c = prompt('Qual valor em Graus Celcius deseja converter?')
            let f = c *9/5 + 32
            console.log('Valor em Fahrenheit:',f) 
            let k = (f - 32) * 5 / 9 + 273.15
            console.log('Valor em Kelvin:',k)  
                

    */
  

/* 2. Quilowatt-hora é uma unidade de energia; 
    e é muito utilizada para se determinar o consumo de energia elétrica em residências.
     Sabe-se que o quilowatt-hora de energia custa R$0.05.
    Faça um programa que receba a quantidade de quilowatts consumida por uma residência
    
    
    a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

        let res1 = 280

        let consumo = res1 * 0.05 

        console.log(consumo, 'reais')

    b.Altere o programa para receber mais um valor: a porcentagem de desconto. 
    Calcule e mostre o valor a ser pago pela mesma 
    residência acima considerando 15% de desconto

        let res1 = 280

        let consumo = ( res1 * 0.05 ) - 15%

        console.log(consumo, 'reais')
    

*/
/* 3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem 
para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, 
podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias,
 existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), 
 galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:


 a.Procure uma forma de converter libra (lb) para quilograma (kg)
  e escreva um programa que converta 20lb para kg. 
  Imprima  a resposta no console da seguinte forma: 
   20lb equivalem a X kg 
        
        let lb = 20;
        let x = lb * 0.454;
        console.log('20lb equivalem a aproximadamente', x, 'kg ')

  b. Procure uma forma de converter onça (oz) para quilograma (kg)
   e escreva um programa que converta 10.5oz para kg.
    Imprima  a resposta no console da seguinte forma: 
    10.5oz equivalem a X kg 

        let oz = 5;
        let x = oz / 35.274;
        console.log('5oz equivalem a aproximadamente', x, 'kg ')
        
   c.  Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 
   100mi para m. Imprima  a resposta no console da seguinte forma: 
            100mi equivalem a X m

            let mi = 100;
            let x = mi *1609;
            console.log('100mi equivalem a aproximadamente', x, 'm ')

   d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft 
   para m. Imprima  a resposta no console da seguinte forma: 
        50ft equivalem a X m
            let ft = 50;
            let x = mi / 3.281;
            console.log('50ft equivalem a aproximadamente', x, 'm ')


   e. Procure uma forma de converter galão (gal) para litro (l) 
   e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
    103.56gal equivalem a X l


            let gal = 103;
            let x = gal * 3.785;
            console.log('103gal equivalem a aproximadamente', x, 'l ')


    f. Procure uma forma de converter xícara (xic) para litro (l) 
    e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
    450 xic equivalem a X l

                let xic = 450;
                let x = xic * 0.24;
                console.log('450 xic equivalem a aproximadamente', x, 'l ')

    g.  Escolha ao menos um dos itens anteriores 
    e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter. 

        let lb = prompt('Qual valor em libras deseja converter?');
        let x = lb * 0.454;
        console.log('20lb equivalem a aproximadamente', x, 'kg ')
   */



