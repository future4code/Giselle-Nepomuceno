import { Request, Response } from "express";
import { createUser } from "../data/createUserData";
import { generateId } from './../services/idGenerator';
import { generateToken } from "../services/authenticator"
import  { hash } from '../hasManager'
 export default async function createUsers(req:Request, res:Response): Promise<void> {
   try{
      if( !req.body.email || req.body.email.indexOf("@") < 0){
         throw new Error("Invalid email");
      }
      if(!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid format, necessary use 6 characters");
      }

      const userData = {
         email: req.body.email,
         password: req.body.password,
         role: req.body.role,
      }
      
     
      const id = generateId();
      const hashPassword = await hash(userData.password)
      await createUser(id, userData.email, hashPassword);
      const token = generateToken({
         id,
         role: userData.role,
      })

      res.status(200).send({token})
      
   } catch(error){
      res.status(400).send({message:error.message})
      console.log
   } 
}
