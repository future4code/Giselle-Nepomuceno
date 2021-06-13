// Exercícios de interpretação de código 

/* 1.
Toda a vez que o usuario responder a constante numero irá traduzir o numero digitado pelo user
como do tipo como number e então se o resto da divisão deste numero por
 dois for igual a 0 signfica que o numero digitado foi par
no entanto se não for = 0 sera provavelmente 1, signficando que e impar.
A ideia é que todos os numeros pares passem no teste e todos os números impares não passem.
*/

/* 2.

a. O usario atraves da variavel fruta irá escolher uma fruta da preferencia dele, e 
a partir do código será impresso o preço da fruta escolhida pelo usuário

b. O preço da fruta  Maçã  é R$ 2.25

c. Ele ira assumir o valor do default em vez de considerar o valor da pêra.
    
*/

/* 3.
a. O que a primeira linha está fazendo?
 É uma constante chamada número, 
 nela tenho um prompt que tá sendo identificado como number.

b. Considere um usuário digitou o número 10.
 Qual será a mensagem do terminal? E se fosse o número -10?
  O numero 10 diria que o número passou no teste.
  O numero -10 nada aconteceria pois não há console especificado

 

c.Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
        Sim, no console de mensagem, porque a variavel foi criada dentro do if,
        logo ela so é valida dentro do if e não fora. 

*/

// Exercícios de escrita de código
/* 4. Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao 
usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a. Faça um prompt para receber a idade do usuário e guarde em uma variável.

b.Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

c. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
 Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

let idade = Number(prompt('Qual a sua idade?'))
if( idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}


*/

/* 5. 
Agora faça um programa que verifica que turno do dia um aluno estuda.
 Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
  Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
  Utilize o bloco if/else

  let turno = prompt('Qual o seu turno? Digite M para matutino,V para vespertino e N para noturno')

if( turno === 'M'){
console.log("Bom Dia!")
} else if (turno === 'V'){
    console.log("Boa Tarde!")
} else if(turno === 'N'){
    console.log("Boa Noite!")
} else {
    console.log("Turno não reconhecido, favor reininciar a pagina")
}

*/

/* 6. usando switch case 

let turno = prompt('Qual o seu turno? Digite M para matutino,V para vespertino e N para noturno')

switch(turno){
    case 'M':
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    case 'N':
        console.log("Boa Noite!")
        break
    default :
        console.log("Turno não reconhecido, favor reininciar a pagina")
        break
}
*/

/* 7.
    Considere a situação: você vai no cinema com um amigo ou amiga, 
    porém ele/ela só assiste filme do gênero fantasia e se o ingresso está abaixo de 15 reais.
     Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir
      e outra pergunta 
     sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
      Caso positivo,
     imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
        let filme = prompt('Qual genero de filme você deseja assistir?')
        let ingresso = Number(prompt('Qual o valor do ingresso?'))
        if(filme === 'fantasia' && ingresso <= 15){
            console.log("Bom filme!")
        } else{
        console.log("Escolha outro filme :(")
        }


*/


 //Desafios 

 /* 1.
 Modifique o código do exercício 7 para, 
 antes de imprimir a mensagem "Bom filme!", 
 pergunte ao usuário, pelo `prompt` que snack ele vai comprar 
 (pipoca, chocolate, doces, etc) e imprima no console as mensagens
  "Bom filme!" e "... com `[SNACK]`", trocando [SNACK] pelo que o usuário colocou no input.
 

    let filme = prompt('Qual genero de filme você deseja assistir?')
    let ingresso = Number(prompt('Qual o valor do ingresso?'))
    if(filme === 'fantasia' && ingresso <= 15){
        let snack = prompt('Qual snack você irá comprar? pipoca, chocolate, doces, etc')
        console.log("Bom filme! com", snack)
    } else{
    console.log("Escolha outro filme :(")
    }
 */
/* 2.

    Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio
    de futebol. Para esta compra, o usuário deve fornecer algumas informações:

    Nome completo;
    Tipo de jogo: IN indica internacional; e DO indica doméstico;
    Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    Categoria: pode ser as opções 1, 2, 3 ou 4;
    Quantidade de ingressos

    O seu sistema deve solicitar estas informações ao usuário, através do prompt . 
    Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total
     que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade).
      Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa.
       Lembrando que o valor de jogos internacionais é o mesmo de jogos 
    domésticos, mas seus preços devem ser dados em dólar (considerar a cotação de U$1,00 = R$4,10)


    ---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Nacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  R$ 1980
Valor total:  R$ 19800 

---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  U$ 482.92682926829275
Valor total:  U$ 4829.2682926829275

let nome = prompt('Qual seu nome?')
let jogo = prompt('Qual o tipo de jogo? Digite IN para jogo internacional e DO para doméstico;')
let etapa = prompt('Qual a etapa digite SF para semi-final, DT para decisão de terceiro lugar, e FI para final?')
let categoria = Number(prompt('Qual a categoria? 1, 2, 3 ou 4?'))
let ingressos = Number(prompt('Quantos ingressos deseja comprar?'))
let valordo = 0
let valorin = valordo * 4.1

if(etapa === 'SF' ){
     etapa = 'Semi-Final'
} else if(etapa === 'DT') {
    etapa = 'Decisão de terceiro lugar'
} else if (etapa === 'FI'){
    etapa = 'Final'
}

if(etapa === 'Semi-Final' && categoria === 1 || etapa === 'Final' && categoria === 2 ){
    valordo = 1320.00
} else if( etapa === 'Semi-Final' && categoria === 2 || etapa === 'Final' && categoria === 3){
    valordo = 880.0
} else if( etapa === 'Semi-Final' && categoria === 3 ){
    valordo = 550.0
} else if( etapa === 'Semi-Final' && categoria === 4 ) {
    valordo = 220.0
} else if( etapa === 'Decisão de terceiro lugar' && categoria === 1 ) {
    valordo = 660.0
} else if( etapa === 'Decisão de terceiro lugar' && categoria === 2 ) {
    valordo = 440.0
} else if( etapa === 'Decisão de terceiro lugar' && categoria === 3 ||etapa === 'Final' && categoria === 4 ) {
    valordo = 330.0
} else if( etapa === 'Decisão de terceiro lugar' && categoria === 4 ) {
    valordo = 170.0
} else if( etapa === 'Final' && categoria === 1 ) {
    valordo = 1980.0
} 




if(jogo === 'DO'){
    console.log('---Dados da Compra---')
    console.log('Nome do Cliente:', nome)
    console.log('Tipo de Jogo: Nacional')
    console.log('Etapa do jogo:', etapa)
    console.log('Categoria:', categoria)
    console.log('Quantidade de ingressos:', ingressos)
    console.log('---Valores---')
    console.log('Valor do ingresso: R$', valordo)
    console.log('Valor Total: R$', valordo * ingressos)
} else if(jogo === 'IN') {
    console.log('---Dados da Compra---')
    console.log('Nome do Cliente:', nome)
    console.log('Tipo de Jogo: Internacional')
    console.log('Etapa do jogo:', etapa)
    console.log('Categoria:', categoria)
    console.log('Quantidade de ingressos:', ingressos)
    console.log('---Valores---')
    console.log('Valor do ingresso: U$', valordo* 4.1)
    console.log('Valor Total: U$', valordo * 4.1 * ingressos)
} else {
    console.log('Verifique novamente o tipo de jogo escolhido')
}


*/
