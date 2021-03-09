// Exercícios de interpretação de código 

/* 1.

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) 

No let i = 0 ele esta dizendo que o inicio é em 0.
em seguida ele ta dizendo que i é menor que 5,
sendo essa uma condição de parada. e o i++ é incrementador 
que vai adicionar mais 1 até chegar a condição de parada.
no codigo da terceira linha, valor += i. ele esta atribuindo
o loop criado dentro da variavel valor. Porem com o acrescimo de + irá aumentar em mais 1 alem do i++
O resultado impresso é 10.*/

/* 2. 
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
        if (numero > 18) {
                console.log(numero)
            }
        }

a. O que sera impresso no console?
 RESPOSTA: Ira percorrer o array e trazer todos os numeros 
 acima de 18 independente da ordem na lista.:  19, 21, 23, 25, 27, 30;

b.Se eu quisesse acessar o índice de cada elemento dessa lista,
 o for...of... é suficiente? Se sim,
  o que poderia ser usado para fazer isso?

  usa-se o nome da variavel : lista[i] sendo i a posição do valor
   desejada lembrando que começa em 0

}
*/

/* Desafio extra 
Desafio Extra:
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
O numeros de linhas não irá ultrapassar quatro 
uma vez que a quantidade atual < quantidadeTotal que é a digitada pelo usuario
Não entendi muito bem a parte dos asteriscos

*/



// Exercícios de escrita de código

/* 3.
   const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
Nas perguntas abaixo, considere que você tenha acesso a um array  
(chamado de 'array original') que seja composto somente de números. 
Após o enunciado, há um exemplo de qual deve ser a resposta final
de cada programa individualmente. escreva um programa que:

a. Imprima cada um dos valores do array original.

    const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

    for( let numero of array){
    console.log(numero)

}

b. Imprima cada um dos valores do array original divididos por 10
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for( let numero of array){
    console.log(numero/10)

}

    
c. Crie um novo array contendo, somente, os números pares do array original

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const array2 =[]

for( let numero of array){
    if(numero % 2 === 0){
        array2.push(numero)
    } 
}
console.log(array2)


d. imprima o index e os valores do array da seguinte forma: "O elemento do índex i é: numero"
        const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    let index = -1;

    for( let numero of array){
        index++
        console.log("O elemento do índex", index ,"é", numero)
    }

    e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

            const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
        let max 
        let min

        for( let numero of array){
        if (numero > 129){
            max = numero
        }else if( numero < 22){
            min = numero
        }
        }
        console.log(' O maior numero é', max, 'e o menor é', min)

*/ 


//Desafios 
//

 /* 1.
Neste exercício vocês vão implementar uma brincadeira muito simples:
 "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas.
  Inicialmente, uma das pessoas insere qual o número em que ela pensou. 
  A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, 
  então quem escolheu o número fica dando umas dicas para a outra pessoa,
 indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:


 
Vamos jogar!
O número chutado foi: 3
Errrrrrrrou, é maior
O número chutado foi: 18
Errrrrrrrou, é menor
O número chutado foi: 15
Errrrrrrrou, é menor
O número chutado foi: 11
Acertou!!
O número de tentativas foi: 4 

 Number(prompt('Tente acertar o número?'))

    // if (numero < numeroCerto){
    //     while(numero < numeroCerto){
    //         console.log("Você errou o número D: tente um valor maior")
    //         numero = Number(prompt('Tente um numero mais alto, vamos ver se você acerta!'))
    //      }
    // } else if (numero > numeroCerto){
    //     while(numero > numeroCerto){
    //         console.log("Você errou o número D: tente um valor menor")
    //         numero = Number(prompt('Tente um numero mais baixo, vamos ver se você acerta!'))
    //      }
    // } else if (numero == numeroCerto) {
    //     console.log("Acertou o numero!")
    //     console.log("Numero de tentativas foi:" )
        
    // }

    Não consegui concluir :(((
         */
/* 2.
Uma das principais características de uma boa pessoa programadora é conseguir 
resolver seus problemas independentemente. Queremos que você comece a treinar 
isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. 
Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. 
A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) 
e o usuário terá que ficar chutando o valor até acertar.
Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.

Quando resolver o exercício, pare e faça a seguinte reflexão:
foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? 
Deixe comentários no seu código sobre esta reflexão

Abaixo, há uma referência que explica como sortear um número em Javascript
*/
