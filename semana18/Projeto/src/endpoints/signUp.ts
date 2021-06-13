import {Request, Response} from "express";
import {idGenerate} from "../services/idGenerate";
import {User} from "../types";
import connection from "../connection";

interface userRequest {
    name: string,
    email: string, 
    password:string
}

export default async function signUp(req: Request, res: Response): Promise<void>{
    try {

        const body = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        if(!body.name || !body.email || !body.password) {
            throw new Error("Missing information, necessary complete name, password and email")
    }
        if( !req.body.email || req.body.email.indexOf("@") < 0){
            throw new Error("Invalid email");
        }
        if(!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid format, necessary use at least 6 characters");
        }
        const user: User = {
            id: idGenerate(),
            name: body.name,
            email: body.email,
            password: body.password
        }

        await connection("UserCookenu")
            .insert(user)

        res.status(201).send("User created successfully")

    } catch (error) {
        res.status(400).send(error.message);
    }

}