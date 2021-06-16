import app from "./app";
import createUser from "./endpoints/createUser";

app.put("/user", createUser);
// nao tem createUser() porque isso so se a funcao fosse ser executada na hora
// no caso quero que ela so seja executada quando ela for acessada atraves de uma request.
// internamente quando o usuario acessa ele automaticamente acessa a função. o express preenche a função passada com req e com Res