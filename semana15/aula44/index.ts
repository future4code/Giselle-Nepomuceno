import express, { Request, Response } from "express";
import cors from "cors";

type user = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
// Mock simulando um array de usuários no Banco de Dados
let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());

//Exercicio 1 a) GET B) Query parameters
app.get("/users/all", (req: Request, res: Response) => {
  try {
    const result = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
      age: user.age,
    }));
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
// Exercicio2 - a)como params pra que ele pudesse pegar a informaçai de tipo atraves do params



app.get("/users/type/:type", (req: Request, res: Response) => {
  try {
    const searchType = req.params.type;

    if (!searchType) {
      throw new Error("Id must be passed, and must be a number");
    }

    const result = users.filter((user) => user.type === searchType);

    if (!result.length) {
      throw new Error("User not found");
    }

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
// Exercicio 3 -  a) o Query é utilizado 
app.get("/users/search", (req: Request, res: Response) => {
  let result: user[] = users;

  if (req.query.name) {
    result = result.filter((user) =>
      user.name.includes(req.query.name as string)
    );
  }
  if (result.length) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Nenhum usuário com este nome foi encontrado");
  }
});

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

//Exercicio 4 - O put editou o meu usuário quando nao alterei o id apenas as demais infos,
//O Put poderia ser capaz de editar meu arquivo enquanto 
//o post apenas postar ele criara 2 ids iguais caso eu nao altere o id.\
// Eu nao deveria permitir mas nao sei como fazer pra bloquear
app.post("/users/create", (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const type = req.body.type;
    const age = req.body.age;

    const newUser = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(200).send({
      message: "ok",
      user: newUser,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.put("/users/create/put", (req: Request, res: Response) => {
  try {
    const { name, email, type, age, id } = req.body;

    const newUser: user = {
      name,
      id,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(200).send("usuário criado com sucesso");
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});



// app.delete("/users/:id", (req: Request, res: Response) => {
//   try {
//     const params = req.params
//     const id = Number(req.params.id)

//     // users => user === id => remove
//     // resposta => deu tudo certo / usuario n encontrado
//   } catch (error) {
//     //
//   }
// })

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
