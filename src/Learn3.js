var array = [1,2,3,4,5,6]
var sum =0
for (let i=0; i< array.length;i++){
    console.log(array[i])
    sum +=array[i]
}
console.log(sum)

var eventScores = [1,2,3,4,5,6,7,8,9,10]
let filteredList = eventScores.filter(scores => scores % 2==0)
console.log(filteredList)

let fruits =["banana","books","apple","oranges"]
var numbers =[1,2,3,4,5,6,6,7,7,8,111,11]
console.log(fruits.sort())
console.log(numbers.sort((a,b) => b-a))