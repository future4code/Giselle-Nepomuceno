import { Request, Response } from "express";
import signupBusiness from "../../business/users/signupBusiness";

export default async function (req: Request, res: Response): Promise<void> {
  try {

    const { name, email, password} = req.body

    const reponse = signupBusiness({
      name, email, password
    })
    res.status(201).send({ message, token })
  } catch (error) {
    res.statusCode = 400
      let message = error.statusCode || error.message

      res.send({ message })
  }
}
