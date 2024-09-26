//object is a collection of properties
let person = {
    firstName:"goran",
    lastName:"Postojic",
    age:24,
    fullName: function() {
        console.log(this.firstName + this.lastName)
    }
}
person.firstName = 'jhon'
person.gender = 'M'

console.log(person.firstName)
console.log(person['lastName'])
console.log(person.gender)
console.log(person)
console.log('gender' in person)
for (let key in person){
    console.log(person[key])
}
