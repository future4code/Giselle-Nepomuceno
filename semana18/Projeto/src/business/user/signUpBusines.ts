import { idGenerate } from "../../services/idGenerate";
import connection from "../../data/connection";
import { generateToken } from "../../services/authenticator";
import { signUpResponseDTO, signUpRequestDTO, User } from "../../model/types";

// criei o userRequestData no model types mas melhor por separado
// daí chamei ele cmo parametro da função abaixo e substui o req.body por ele.
// o mesmo fiz pra const user.
// por ultimo retornei o token apos a conexão

export default async function signUpBusiness(
  userRequestData: signUpRequestDTO
): Promise<signUpResponseDTO> {
  if (
    !userRequestData.name ||
    !userRequestData.email ||
    !userRequestData.password
  ) {
    throw new Error(
      "Missing information, necessary complete name, password and email"
    );
  }

  if (typeof userRequestData.name !== "string") {
    throw new Error("The field name should be a string");
  }
  if (typeof userRequestData.email !== "string") {
    throw new Error("The field email should be a string");
  }
  if (typeof userRequestData.password !== "string") {
    throw new Error("The field password should be a string");
  }
  if (!userRequestData.email || userRequestData.email.indexOf("@") < 0) {
    throw new Error("Invalid email");
  }
  if (!userRequestData.password || userRequestData.password.length < 6) {
    throw new Error("Invalid format, necessary use at least 6 characters");
  }

  const user: User = {
    id: idGenerate(),
    name: userRequestData.name,
    email: userRequestData.email,
    password: userRequestData.password,
  };
  const token = generateToken({ id: user.id });

  await connection("UserCookenu").insert(user);

  return {token};
  //pq o type é um objeto
}
