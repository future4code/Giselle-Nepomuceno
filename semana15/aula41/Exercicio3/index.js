
const tarefa = process.argv[2];
const tarefa2 = process.argv[3];
const tarefa3 = process.argv[4];
const listaDeTarefas = ['comprar leite']

const blue = '\u001b[34m';
listaDeTarefas.push(tarefa, tarefa2, tarefa3)
console.log(blue + listaDeTarefas)




