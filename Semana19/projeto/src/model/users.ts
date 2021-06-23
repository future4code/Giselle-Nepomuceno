export type authenticationData = {
  id: string
}

export type user = {
  id: string,
  name: string,
  email: string,
  password: string
}
export type signUpRequestDTO = {
  name: any,
  email: any,
  password: any
}
export interface signUpResponseDTO {
  token: string
}