/* a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
Tente atribuir um número a esta variável. O que acontece?
R: Dara erro, uma vez que era esperado uma string e
 nao um número ele acusa que o numero nao é do tipo string*/
 
 type strings = string
 let minhaString : strings = 21

 /* b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
Como podemos fazer para que essa variável também aceite strings?
R: É necessario colocar (number|string)*/

type numbers = (number|string)
let MeuNumero:numbers = 'Sorridente'

/* c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

`nome`, que é uma string;

`idade`, que é um número;

`corFavorita`, que é uma string.

Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.*/

type person = {
    nome: string, 
    idade: number, 
    corFavorita:string
}

const person1:person = {
    nome:'Nicole', 
    idade: 23,
    corFavorita:'azul'
}
const person2:person = {
    nome:'Bruna', 
    idade: 13,
    corFavorita:'Rosa'
}
const person3:person = {
    nome:'Pablo', 
    idade: 34,
    corFavorita:'Roxo'
}
/* d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris.
 Utilize um `enum` para isso.*/

 enum escolherCorFavorita {
     ROXO = "Roxo",
     AZUL = "Azul",
     ROSA = "Rosa",
     PRETO = "Preto"
 }
const person4:person = {
    nome:'Nicole', 
    idade: 23,
    corFavorita:escolherCorFavorita.AZUL
}
const person5:person = {
    nome:'Bruna', 
    idade: 13,
    corFavorita:escolherCorFavorita.ROSA
}
const person6:person = {
    nome:'Pablo', 
    idade: 34,
    corFavorita:escolherCorFavorita.ROXO
}