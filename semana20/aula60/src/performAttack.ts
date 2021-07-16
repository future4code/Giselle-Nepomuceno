import { Character, validateCharacter } from "./validateCharacter";


export function performAttack(attacker: Character, defender:Character): boolean {
  
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid character")
    }
    if(attacker.strength >= defender.defense){
        defender.life = defender.life -  ( attacker.strength - defender.defense)
    }

}