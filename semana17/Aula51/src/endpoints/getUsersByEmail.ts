import { Request, Response } from "express";
import app from "../app";
import { getUserByEmail } from "../data/createUserData";
import { generateToken } from "../services/authenticator"

 export default app.get("/user/getUser", async(req:Request, res:Response) =>{
   try{
      if( !req.body.email || req.body.email.indexOf("@") < 0){
         throw new Error("Invalid email");
      }
     
      const userData = {
         email: req.body.email,
         password: req.body.password
      }

      const user = await getUserByEmail(userData.email);

        if (user.password !== userData.password) {
         throw new Error("Invalid password");
    }

      const token = generateToken({
        id: user.id
      })

      res.status(200).send({token})
      
   } catch(error){
      res.status(400).send({message:error.message})

   } 
})