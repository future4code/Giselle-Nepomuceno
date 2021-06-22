import { performAttack } from "../src/performAttack";
import { Character } from "../src/validateCharacter";

describe("Testing performAttack functions", () => {

    test("should be able to fight", () => {
        //estou mockando minha função de validação de personagem
        // ao dizer que da true, tudo o que eu fizer relacionado a função sera true
        // é como dizer que a funcao validateCharacter SEMPRE DARA TRUE!
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
        
        performAttack( attackCharacter, defenderCharacter, validatemock as any);
        expect(defenderCharacter.life).toBe(1400);
    })
})