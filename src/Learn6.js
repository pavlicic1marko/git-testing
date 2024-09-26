module.exports = class person{
    age = 25

    get location(){
        return "canada"
    }

    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        return this.firstName + " " + this.lastName
    }
}
//ssss
//ssssssss
//add in BE-0002  no conflicts
