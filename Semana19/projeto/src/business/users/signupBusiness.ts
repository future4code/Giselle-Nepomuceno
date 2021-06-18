import { signUpRequestDTO, signUpResponseDTO } from "../../model/users";
import { generateId } from "../../services/idGenerete";
import { hash} from "../../services/hashManager"
import { connection } from "../../data/connection";
import { generateToken } from "../../services/authenticator";
import { CustomError } from "../errors/costumError";


export default async function loginBusiness(userRequestData: signUpRequestDTO): Promise<signUpResponseDTO> {
  let message = "Success!"
  const { name, email, password } = userRequestData

  if (!name || !email || !password) {
     throw new CustomError(406, '"name", "email" and "password" must be provided')
  }

  const id: string = generateId();

  const cypherPassword = await hash(password);

  await connection('labook_users')
     .insert({
        id,
        name,
        email,
        password: cypherPassword
     })

  const token: string = generateToken({ id })
  return {token};
  
}