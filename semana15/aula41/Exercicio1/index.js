// Através do node index.js* -> * Sendo index.js 
//o nome do arquivo que quero acessar node + nome do arquivo + argumento.
const red = '\u001b[31m';
const blue = '\u001b[34m';
const reset = '\u001b[0m';

const nome = process.argv[2];
const age =  Number(process.argv[3]);
const text1 = `Olá ${blue} ${nome}${reset}! Você tem ${red} ${age} ${reset}anos.`
// console.log(text1)

const ageSevenYearsLater = age + 7
const text2 = `Olá ${blue} ${nome}${reset}! Você tem ${red} ${age} ${reset} anos. Em sete anos você terá  ${red} ${ageSevenYearsLater}.`
if (nome && age ){
    console.log(text2)
} else {
    console.log( blue + 'É preciso adicionar nome e idade um seguido do outro')
}
