import express, {Express, Request, Response} from 'express';
import cors from 'cors';


const app: Express = express();


app.use(express.json());
app.use(cors());

type user = {
name:string,
cpf:number,
birth:string ,
}
let users: user[] = [{
    name: "Giselle Rosa",
    cpf: 10101010101,
    birth:"02/10/1993",

}]
app.post("/labebank/createaccount", (req:Request, res:Response)=>{
    try{const {name,cpf, birth} = req.body;
        const newUser: user = {
            name,
            cpf,
            birth
        }
        users.push(newUser);

        if (newUser){
            let birth = newUser.birth
            let birthYear = birth.substr(6)
            let currentYear = new Date().getFullYear()
            let calcYear =  currentYear - Number(birthYear) 
            console.log(calcYear)
            if ( calcYear >= 18 ){
                res.status(200).send({
                    message: "ok",
                    user: newUser,
                });
            }else {
                res.status(404).send('Para abrir a conta é necessário ter mais de 18 anos.');
            }
        }
    }catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    }
})


app.listen(3003, ()=>{
    console.log("Server is running at http://localhost:3003");
}); 