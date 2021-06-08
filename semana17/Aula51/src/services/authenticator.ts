import * as jwt from "jsonwebtoken";

export type authenticationData= {
    id: string
    role:string
}
export function generateToken(payload: authenticationData):string {
    return jwt.sign(
       {
            payload
        },
        process.env.JWT_KEY as string,
        {
            expiresIn:"1min"
        }
    )
}
export function getTokenData(token:string): authenticationData{
   const result:authenticationData = jwt.verify(
        token,   process.env.JWT_KEY as string
    
    ) as authenticationData;
    return result;
}
// import * as jwt from "jsonwebtoken";

// export const getData = (token: string): authenticationData => {
//   const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
//   const result = {
//     id: payload.id,
//   };
//   return result;
// };