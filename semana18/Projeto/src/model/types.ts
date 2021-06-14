
export type User = {
    id: string, 
    name: string,  
    email: string, 
    password: string
}

export interface userRequestData {
    name: string,
    email: string, 
    password:string
}