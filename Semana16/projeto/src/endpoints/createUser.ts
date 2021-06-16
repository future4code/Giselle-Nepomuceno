import {Request, Response} from "express";
import connection from "../connection"
import {User} from "../types";
import { idGenerate } from "../services/idGenerate";

interface userRequest {
    name: string,
	nickname: string,
	email: string
}

//interface é similar ao type  -- Lembre-se não tem = ou : se usar interface em vez de type

export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const body: userRequest = { 
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }
        if(!body.name||!body.nickname||!body.email) {
            throw new Error("Necessary complete the information to create an user account")
        }

        
        //criei um arquivo types e a partir dele chamei ele aqui pra usar e a declaracao de user vai ser igual types
        // usei o id generate que é a instalacao do uuid, no arquivo em services
        const user: User = {
            id: idGenerate(),
            name: body.name,
            nickname: body.nickname,
            email: body.email
        }

        // precisa pegar a info do banco de dados usando o connection... pra passar a info pra tabela
        await connection("User")
            .insert(user)
            

        res.status(201).send("User created successfully")
    } catch(error) {
        res.status(400).send(error.message);
    }
}