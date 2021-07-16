import { performAttack } from "../src/performAttack";
import { Character } from "../src/validateCharacter";

describe("Testing performAttack functions", () => {

    test("should be able to fight", () => {
        const validatemock = jest.fn(()=>{
                return true
            });
        const defenderCharacter : Character = {
            name: "Sauros",
            life: 1500,
            defense: 400,
            strength:600
        }
        const attackCharacter : Character = {
            name: "Bractos", 
            life:1500,
            defense: 300,
            strength: 500
        }
        
        performAttack(defenderCharacter, attackCharacter, validatemock as any);
    })
})