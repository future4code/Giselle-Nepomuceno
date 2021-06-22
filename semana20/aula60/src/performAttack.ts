import { Character } from "./validateCharacter";

export function performAttack(
  attacker: Character,
  defender: Character,
  validator: (character: Character) => boolean
) {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }
  if (attacker.strength > defender.defense) {
    defender.life = defender.life - (attacker.strength - defender.defense);
  }
}
