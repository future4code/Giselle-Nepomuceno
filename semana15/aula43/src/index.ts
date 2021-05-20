import express, {Request, Response} from "express";
import cors from "cors";
import {countries} from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

type country = {
   "id": number,
   "name": string,
   "capital": string,
   "continent": string
 }

type countriesEditBody = {
   name: string,
   capital: string
}
app.get("/countries/all", (req: Request, res: Response)=>{
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }))
    res
    .status(200)
    .send(result);
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
      if(result.length) {
     res.status(200).send(result)
   }else {
     res.status(404).send('Erro ao tentar fazer requisição')
   }
});

app.get("/countries/:id", (req: Request, res: Response)=>{
 
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
     )
     
     if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("ID não encontrado")
     }


});




app.put("/countries/edit/:id", (req:Request, res:Response)=>{
  
   const body : countriesEditBody = req.body ;
   if (body === undefined) {
      res.status(404).send("Altere o nome e uma capital")
   }
   const result: country | undefined = countries.find(
      country => country.id === Number(req.params.id)
   )
if ( result === undefined ) {
   res.status(404).send("País não encontrado")
}else {
   result.name = body.name
   result.capital = body.capital
   res.status(200).send(result)
}
 
   
});

app.listen(3003, ()=>{
    console.log("Server is running at http://localhost:3003");
});