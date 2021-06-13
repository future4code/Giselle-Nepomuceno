import app from "./app";
import createUser from "./endpoints/createUser";

app.put("/user", createUser);