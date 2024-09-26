const Person = require('./Learn6')
class Pet extends Person
{
    get location()
    {
        return "blue Cross" //fix blue cross use this maybe
    }
    constructor(firstName,lastName)
    {
        //call parent class constructor
        //add a comment line
        super(firstName,lastName)
    }
}
//commit A
let pet = new Pet("rex","dark")
console.log("this game sucks please give me new")