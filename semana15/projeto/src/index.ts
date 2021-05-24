import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());

type account = {
  value: number;
  date: string;
  description: string;
};
type user = {
  name: string;
  cpf: number;
  birth: string;
  bankBalance: number;
  extract: account[];
};
let users: user[] = [
  {
    name: "Giselle Rosa",
    cpf: 10101010101,
    birth: "02/10/1993",
    bankBalance: 0,
    extract: [],
  },
];
app.post("/labebank/createaccount", (req: Request, res: Response) => {
    const { name, cpf, birth } = req.body;

    let currentYear = new Date().getFullYear();
    let birthYear = new Date(birth).getFullYear();
    let age = currentYear - birthYear;

    try {
        if(name && cpf && birth){
            const checkCPFuser = users.find(user => user.cpf === cpf)
            if(checkCPFuser){
                throw new Error("This account already exist")
            }
            if(age <=18){
                throw new Error("Necessary to be over 18 to create an account")
            }
        }
    
    const newUser: user = {
      name,
      cpf,
      birth,
      bankBalance: 0,
      extract: [],
    };
    users.push(newUser);


    if (newUser) {
        res.status(200).send({
          message: "ok",
          user: newUser,
        });
      } else {
        res
          .status(404)
          .send("Necessary complete all informations to create an account");
      }
    
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});


app.get("/labebank/bankbalance", (req: Request, res: Response) => {
    const { name, cpf } = req.body

    try{
         if (name && cpf){
               const findUser = users.find(user => user.name === name && user.cpf === cpf)
               if (findUser){
                    res.status(200).send({
                        message: "ok",
                        bankbalance: findUser.bankBalance,
                      });
                }else if (!name || !cpf){
                    throw new Error("It's necessary insert your name and cpf")
                }else {
                    throw new Error("User not found")
                }
            }else{
                throw new Error("Necessary complete informations name and cpf")
            }
    }catch (err) {
            res.status(400).send({
              message: err.message,
            });
    }
})

app.put("/labebank/addbalance", (req:Request, res:Response)=>{
    const { name, cpf, bankBalance } = req.body
    if (name && cpf){
        const findUser = users.find(user => user.name === name && user.cpf === cpf)
        if (findUser){
            const newBalance: number  = findUser.bankBalance + bankBalance
            findUser.bankBalance = newBalance
            if(newBalance){
                res.status(200).send({
                    message: "ok",
                    bankbalance: newBalance,
                  });
            } else if(!bankBalance||bankBalance === 0){
            throw new Error("It's Necessary insert a value in your account")
            } 
        }else if (!findUser){
            throw new Error("User not found")
        }
    }else if(!name || !cpf){
        throw new Error("It's necessary insert your name and cpf")
    }
})