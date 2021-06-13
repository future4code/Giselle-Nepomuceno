import app from "./app"
import createUsers from './endpoints/createUsers'
import getUsersByEmail from "./endpoints/getUsersByEmail"


app.post('/user/signup', createUsers)
app.get('/user/getUser', getUsersByEmail)

// console.log(getTokenData("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Impvw6NvemluaG8iLCJpYXQiOjE2MjMwNzMwMzEsImV4cCI6MTYyMzA3NjYzMX0.t-wGBYO9Gb_0UFCjTF_qWN3qbPqdzcmpWObBrA4qh04"))

// console.log(generateToken({id:"joãozinho"}))
// console.log(getTokenData("joãozinho"))