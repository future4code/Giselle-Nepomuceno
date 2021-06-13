import app from './app';
import {Request, Response} from 'express';
import connection from './connection';

app.get("/actors/name/:name", async (req,res) => {
    try{
      
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name LIKE "%${req.params.name}%"
        `)
        res.send(result)
    } catch(error){
        res.status(500).send("An expected error occurred")

    }
})


app.get("/actors/gender/:gender", async (req,res) => {
    try{
      
        const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender LIKE "${req.params.gender}"
        `)
        res.send(result)
    } catch(error){
        res.status(500).send("An expected error occurred")

    }
})

const updateSalary = async(id:string, salary: number) : Promise<any> => {
    const actorSalary = {
        salary: salary
    }
    return await connection("Actor")
        .update(actorSalary)
        .where({id: id})
}

app.put("/actors/salary/:id", async(req, res)=>{
    try{
       await updateSalary(req.params.id, req.body.salary)

        res.send("Update!")

    }catch(error){
        console.log(error.message)
        res.status(500).send("Internal Error")
    }
})

