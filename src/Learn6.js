class person{
    age = 25

    get location(){
        return "canada"
    }

    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        return this.firstName + this.lastName
    }
}

let person1 = new person("marko","pa")
console.log(person1.age)
console.log(person1.location)
console.log(person1.firstName, person1.lastName)
var person1FullName =person1.fullName()
console.log(person1FullName)

