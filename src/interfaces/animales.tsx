export interface Animal{
    name: string,
    image: string,
    petType: string,
    petGender: string
}

export interface getAnimales {
    message : Animal[]
}

export interface getAnimal {
    animal : Animal
}