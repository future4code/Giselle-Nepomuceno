import {Router} from "express";
import signUp from "../controller/user/signUp";

export const userRouter = Router();

userRouter.post("/signup", signUp)