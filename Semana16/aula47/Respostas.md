### Exercício 1

a) dependnedo da forma como foi solicitada a respota ele se por exemplo
ele ira mandar a resposta completa de um get por raw exatamente como pedido no pedidoe como encontra-se no banco de dados.

b) try{

        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name LIKE "%${req.params.name}%"
        `)
        res.send(result)
    } catch(error){
        res.status(500).send("An expected error occurred")

    }

c)
const updateSalary = async(id:string, salary: number) : Promise<any> => {
const actorSalary = {
salary: salary
}
return await connection("Actor")
.update(actorSalary)
.where({id: id})
}

### Exercício 2

a) A resposta é: Blablabla, porque:

1. Bleus
2. Blius
3. Blos

b) Isso está errado, pelos motivos:

- Óbvio
- Sem dúvida

### Exercício 3

a) A resposta é: Blablabla, porque:

1. Bleus
2. Blius
3. Blos

b) Isso está errado, pelos motivos:

- Óbvio
- Sem dúvida

### Exercício 4

a) A resposta é: Blablabla, porque:

1. Bleus
2. Blius
3. Blos

b) Isso está errado, pelos motivos:

- Óbvio
- Sem dúvida
