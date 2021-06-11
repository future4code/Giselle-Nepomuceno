import {v4} from "uuid";

export const idGenerate = (): string => {
    return v4()
}