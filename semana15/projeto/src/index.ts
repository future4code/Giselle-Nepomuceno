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

app.post("/bank/createAccount", (req:Request, res:Response)=>{
    const body : user = req.body;
    if (body){
        let birth = "22122009"
        let birthYear = birth.substr(4)
        let currentYear = new Date().getFullYear()
        let calcYear = Number(birthYear) - currentYear
        console.log(calcYear)
        if ( calcYear >= 18 ){
        }
    }
})


app.listen(3003, ()=>{
    console.log("Server is running at http://localhost:3003");
}); 