
export type User = {
    id: string, 
    name: string,  
    email: string, 
    password: string
}

export interface signUpRequestDTO {
    name: any,
    email: any, 
    password:any
}

export interface signUpResponseDTO {
    token: string
}
//DTO de saída do meu Endpoint