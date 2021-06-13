import { Request, Response } from "express";
import { getUserById } from "../data/createUserData";
import { getTokenData} from "../services/authenticator"

 export default async function getUsersById(req:Request, res:Response): Promise<void>{
   try{
    const token = req.headers.authorization as string;
      
      const authorizationToken = getTokenData(token)

      if (authorizationToken.role !== "normal" ){
        throw new Error("Invalid authorization");
      }

      const user = await getUserById(authorizationToken.id);
      
      
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
      
   } catch(error){
      res.status(400).send({message:error.message})

   } 
}
