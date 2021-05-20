import express, {Request, Response} from "express";
import cors from "cors";
import {countries} from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response)=>{

    const nome = req.body.nome;
    const cabelo = req.query.cabelo;

    res.send({message: `Hello, ${nome}, seu é cabelo é ${cabelo}.`});

});


app.get("/countries/all", (req: Request, res: Response)=>{
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }))
    res
    .status(200)
    .send(result);
});


type country = {
    "id": number,
    "name": string,
    "capital": string,
    "continent": string
  }

app.get("/countries/:id", (req: Request, res: Response)=>{
 
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
     )
     
     if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("Not found")
     }


});

app.get("/countries/search", (req: Request, res: Response)=>{
    let result: country[] = countries

    if (req.query.name) {
       result = result.filter(
          country => country.name.includes(req.query.name as string)
       )
    }
    
    if (req.query.capital) {
       result = result.filter(
          country => country.capital.includes(req.query.capital as string)
       )
    }
    
    if (req.query.continent) {
       result = result.filter(
          country => country.continent.includes(req.query.continent as string)
       )
    }
       if(result.length > 0) {
      res.status(200).send(result)
    }else {
      res.status(404).send('Erro ao tentar fazer requisição')
    }
});

app.listen(3003, ()=>{
    console.log("Server is running at http://localhost:3003");
});