const operacao = process.argv[2]
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

const red = '\u001b[31m';
const blue = '\u001b[34m';

if (operacao && number1 && number2){
switch(operacao){
	case "soma":
		console.log(red + Number(number1 + number2))
		break;
    case "mult":
        console.log(red + Number(number1 * number2))
        break;
    case "div":
        console.log( red + Number(number1 / number2))
        break;
	case "subt":
		console.log(red + Number(number1 - number2))
		break;
        default:
    console.log(blue + `Desculpe, não encontrei os valores de ${red} ${operacao}.`);
}} else {
    console.log(blue + 'São esperados 3 valores, o valor da operacao e mais dois valores de número para executar a operação!')
}