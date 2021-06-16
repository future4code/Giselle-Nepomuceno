import app from "./controller/app";
import {userRouter} from "./routes/userRouter";

app.use("/user", userRouter);
// o use é uma função do app
// o /user vai ser o prefixo da rota signUp :)