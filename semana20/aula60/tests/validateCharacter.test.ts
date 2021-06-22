import { Character, validateCharacter } from "../src/validateCharacter"


describe("Testing function validateCharacter", ()=>{
    test("should be able to return false when name is void", ()=>{
            const character : Character ={
                name: "",
                life: 1500,
                defense: 1000,
                strength: 1200
            }
            const result = validateCharacter(character)
            expect(result).toBe(false)
    }  ),
    test("should be able to return false when the character life is 0", ()=>{
        const character : Character ={
            name: "Canudos",
            life: 0,
            defense: 1000,
            strength: 1200
        }
        const result = validateCharacter(character)
        expect(result).toBe(false)
    }  ),
    test("should be able to return false when strenght is 0", ()=>{
        const character : Character ={
            name: "Alice",
            life: 1500,
            defense: 1000,
            strength: 0
        }
        const result = validateCharacter(character)
        expect(result).toBe(false)
    }  ),
    test("should be able to return false when defense is 0", ()=>{
        const character : Character ={
            name: "Bob",
            life: 1500,
            defense: 0,
            strength: 1000
        }
        const result = validateCharacter(character)
        expect(result).toBe(false)
    }  ),
    test("should be able to return false when defense is negative", ()=>{
        const character : Character ={
            name: "Donald",
            life: 1500,
            defense: -50,
            strength: 1000
        }
        const result = validateCharacter(character)
        expect(result).toBe(false)
    }  ),
    test("should be able to return true in a valid character", ()=>{
        const character : Character ={
            name: "Benjamin",
            life: 1500,
            defense: 1000,
            strength: 1000
        }
        const result = validateCharacter(character)
        expect(result).toBe(true)
    }  )

})