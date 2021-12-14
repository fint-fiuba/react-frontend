export interface Animal{
    name: string,
    image: string,
    petSex: string,
    petCategory: string
}

export interface getAnimales {
    message : Animal[]
}

export interface getAnimal {
    animal : Animal
}