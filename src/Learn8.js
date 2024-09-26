const Person = require('./Learn6')
class Pet extends Person
{
    get location()
    {
        return "blueCrosss" //BE0001
    }
    constructor(firstName,lastName)
    {
        //call parent class constructor
        super(firstName,lastName)
    }
}
//commit A
let pet = new Pet("rex","dark")
console.log(pet.location, pet.fullName())