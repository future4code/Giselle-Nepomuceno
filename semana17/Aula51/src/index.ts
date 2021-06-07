import app from "./app"
import createUsers from './endpoints/createUsers'
import { generateId } from './services/idGenerator';
import {generateToken, getTokenData} from "./services/authenticator"


app.post('/user/signup', createUsers)
app.get('/user/signup', createUsers)

// console.log(getTokenData("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Impvw6NvemluaG8iLCJpYXQiOjE2MjMwNzMwMzEsImV4cCI6MTYyMzA3NjYzMX0.t-wGBYO9Gb_0UFCjTF_qWN3qbPqdzcmpWObBrA4qh04"))

// console.log(generateToken({id:"joãozinho"}))
// console.log(getTokenData("joãozinho"))