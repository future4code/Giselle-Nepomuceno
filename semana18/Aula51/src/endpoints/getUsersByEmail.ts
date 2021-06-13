import { Request, Response } from "express";
import { getUserByEmail } from "../data/createUserData";
import { generateToken } from "../services/authenticator"
import {compare} from '../hasManager'

 export default async function getUsersByEmail(req:Request, res:Response): Promise<void>{
   try{
      if( !req.body.email || req.body.email.indexOf("@") < 0){
         throw new Error("Invalid email");
      }
     
      const userData = {
         email: req.body.email,
         password: req.body.password,
         role: req.body.role,
      }
     
      const user = await getUserByEmail(userData.email);

        if (user.password !== userData.password) {
         throw new Error("Invalid password");
    }
      const compareResult = await compare(
         userData.password,
         user.password
         
      );

      if (!compareResult) {
         throw new Error("Invalid password");
      }

      const token = generateToken({
        id: user.id,
        role: userData.role,
      })

      res.status(200).send({token})
      
   } catch(error){
      res.status(400).send({message:error.message})

   } 
}
