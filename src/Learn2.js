let marks = Array(6)
marks =new Array(10,8,9,10,5,6,8)
var marks1 =[1,2,3,4,5,6,7]
marks1[0]=999
marks.push(222222) //add at the end
marks.unshift(-11111)
marks.pop()
console.log(marks,marks1, marks1[0], marks.length)
console.log("position is:",marks.indexOf(-11111))
console.log(marks.slice(2,5))
console.log("marks include:",marks.includes(10))
