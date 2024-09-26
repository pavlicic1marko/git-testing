const Person = require('./Learn6')
class Pet extends Person
{
    get location()
    {
        return "blue cross" //change in be-0002 this is the corect value
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