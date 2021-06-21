import { performPurshase, User } from "../src/user"

describe("Testing performPurshase", ()=>{
    test("testing balance bigger than than value", ()=>{
        const user:User = {
            name: "Barney e seus amigos",
            balance: 134
        }
        const result = performPurshase(user, 55)
        const expectedValue = {
            name:"Barney e seus amigos",
            balance: 79
        }
        expect(result).toEqual(expectedValue)
    })

    test("testing balance equal to value", ()=>{
        const user:User = {
            name: "Barney e seus amigos",
            balance: 134
        }
        const result = performPurshase(user, 134)
        const expectedValue = {
            name:"Barney e seus amigos",
            balance: 0
        }
        expect(result).toEqual(expectedValue)
    })

    test("testing balance smaller than value", ()=>{
        
        const user:User = {
            name: "Barney e seus amigos",
            balance: 134
        }
        const result = performPurshase(user, 135)
        
        expect(result).not.toBeDefined()
    })

})