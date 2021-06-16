import { Request, Response } from "express";
import signUpBusiness from "../../business/user/signUpBusines";

export default async function signUp(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const response = await signUpBusiness({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
