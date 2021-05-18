type valor = {
   numeros: number[],
   estatisticaFunction: (numeros:number) => {}
}

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    estatisticaFunction: obterEstatisticas
}

const ordernarNumeros =  amostraDeIdades.estatisticaFunction(amostraDeIdades.numeros)

console.table(ordernarNumeros)

//a) array de numeros e e saida como objeto
//b) numeros ordenados e estatisticas que vao receber a tipagem do array de numeros