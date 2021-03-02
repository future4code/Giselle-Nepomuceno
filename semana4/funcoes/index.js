

// Exercícios de interpretação de código 


/* 1.
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a. 10
   50

b. Nada porque não seria impresso, pois o console.log foi retirado e não esta presente na função


*/

/* 2.
let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)

a. Será impresso em um em baixo do outro os nomes dentro do
 arrayDeNomes que não ultrapassam 2 ou seja, Darvas e Caio

b. Se amanda e Caio fossem os unicos ambos seriam impressos imprimindo o array completo.

*/


/* 3.
const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    arrayFinal.push(x * x)
		}
  }

  return arrayFinal;


  Resposta: numerosPares

  function numerosPares(){
	  ...
  }
}

*/
 // Exercicios de Escrita

/* 4.
a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas 
informações sobre você, como: 
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
 Lembrando que a função não possui entradas, apenas imprimir essa mensagem.


 function informationXl() {

	 console.log("Eu sou Giselle, tenho 27 anos, moro no Rio de Janeiro sou estudante de programação.")

}
console.log(informationXl())

b. Agora escreva uma função que receba 4 parâmetros que correspondem às 
informações de uma pessoa: o nome (string), a idade (number), a cidade (string) 
e um boolean que representa se é estudante ou não. Ela deve retornar uma string que
 unifique todas as informações da pessoa em uma só mensagem com o template:

 function informationXl(nome, number, cidade, estudante ) {
	if(estudante === true ){
		estudante = "sou"
	} else{
		estudante = "não sou"
	}
	console.log("Eu sou", nome , "tenho",  number, "anos", "moro no", cidade, estudante, "de programação.")

}
const print = informationXl("Giselle", 27, "Rio de Janeiro", false)


*/


/* 5.
a.Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
 faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

	function soma(number1, number2) {
	let result = number1 + number2
	return result
}

	console.log(soma(3,5))


b.Faça uma função que recebe 2 números e retorne um booleano que informa 
	se o primeiro número é maior ou igual ao segundo
 
	function numbers(number1, number2) {
	if(number1 > number2) {
		console.log('O primeiro número é maior que o segundo')
	} else if( number1 === number2){
		console.log('O primeiro número é igual ao segundo')
	}
}
const printNumber = numbers(2,2)

c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes.
 (não é permitido escrever 10 console.log dentro da função, use outra estrutura de código para isso)

 function message(text){
	for(let i = 0; i < 10; i++){
		console.log(text)
	}
}
 let printMessage = message('O mar é a amor!')

*/



/* 6.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
	a .Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
		const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
		function listas(meuArray){
			console.log(meuArray.length)
		}
		let printArray = listas(array)
    b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
			
	       function numeroPar(number) {
				if (number % 2 === 0){
					return true
				} else {
					return false
				}
			}
			let result = numeroPar(11)
			console.log(result)
	c.  Escreva uma função que receba um array de números e
	 devolva a quantidade de números pares dentro dele

	 const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
	
		
function quantidaDeNumerosPares(meuArray) {
	let array2 = []
	for(let pares of meuArray){
		if (pares % 2 === 0){
			array2.push(pares)
		}
	}
return array2
}
	console.log(quantidaDeNumerosPares(array))]



d.  Reescreva seu código anterior (do item c) 
de tal forma que ele utilize a função do item b para verificar se o número é par

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function numeroPar(number) {
	if (number % 2 === 0){
		return true
	} else {
		return false
	}
}

			
function quantidaDeNumerosPares(meuArray) {
	let array2 = []
	for(let pares of meuArray){
		if (numeroPar(pares)){
			array2.push(pares)
		}
	}
return array2.length
}
	console.log(quantidaDeNumerosPares(array))

	
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function numeroPar(number) {
	if (number % 2 === 0){
		return true
	} else {
		return false
	}
}

			
function quantidaDeNumerosPares(meuArray) {
	let array2 = []
	for(let pares of meuArray){
		if (numeroPar(pares)){
			array2.push(pares)
		}
	}
return array2.length
}
	console.log(quantidaDeNumerosPares(array))

	


*/


	//DESAFIOS 	

/* 1.
 Funções são trechos de códigos como quaisquer outros mas que
 podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas.
 Então, funções podem chamar/invocar outras funções também. 
 Sua tarefa é escrever duas funções:

	a. Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro.
	const myFunction = (love) => {
	return  console.log(love)
	} 

	myFunction(10)


 b.Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. 
 Faça a soma entre esses valores e chame a sua primeira função
  mandando este resultado da soma como entrada para imprimí-lo

const myFunction = (love) => {
	return  console.log(love)
	} 


const problem = (problem1, problem2) => {
	const soma = problem1 + problem2
	myFunction(soma)
}

problem(8,5)

*/

/* 2.

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

a.Escreva uma função que receba um array como parâmetro e retorne um array com 
apenas os números pares e multiplicados por 2.
const numero = [0, 8, 23, 16, 10, 15, 41, 12, 13]
const arrayTop = (arrayNovo) => {
	for (const numeros of arrayNovo){
		if(numeros % 2 === 0){
			console.log(numeros * 2)
		}
	}
}

arrayTop(numero)
	b. Escreva uma função que receba um array como parâmetro e retorne o maior número deste array.

	const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
function retornaMaiorNumero(arrayDeNumeros){
	let maiorNumero = arrayDeNumeros[0];
	for(let i = 0; i < arrayDeNumeros.length; i++){
		if(arrayDeNumeros[i] > maiorNumero)**** comentario Se  usar< irá retornar o menor número***** {
			maiorNumero = arrayDeNumeros[i];
		}
	}
	return maiorNumero
}
console.log(retornaMaiorNumero(numeros))

c. Escreva uma função que receba um array como parâmetro e retorne o índice do maior número deste array.

function retornaIndiceMaiorNumero(arrayDeNumeros){
	let indice
	let maiorNumero
	arrayDeNumeros = arrayDeNumeros[0]
	for(let i=0; i< arrayDeNumeros.length; i++){
		if(arrayDeNumeros[i] > maiorNumero ){
			maiorNumero = arrayDeNumeros[i]
			indice = i
		}
	}
	return {
		maiorNumero, indice
	}
}

console.log()

d. Escreva uma função que recebe um array como parâmetro e retorne este array invertido.
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function invertido(arrayInvertido){
	let arrayNovo = []
	for(let i = arrayInvertido.length  -1 ; i >= 0; i--){
		arrayNovo.push(arrayInvertido[i])
	}
	return arrayNovo
}

console.log(invertido(numeros))

*/
