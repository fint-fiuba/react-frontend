import { Animal } from "./animales";

export interface User{
    firstName: string,
    lastName: string,
    mail: string,
    animal : Animal
}