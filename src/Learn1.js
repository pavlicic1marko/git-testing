const flag = true
//.....
if(flag)
{
    console.log("condition is satisfied")
}
else
{
    console.log("condition is not satisfied")
}

let i = 0
while(i < 10)
{
    i++
    console.log("i am in a loop: " , i)
}


for(let k=22; k<=33; k++)
{
    if(k%2==0 || k%4 ==0){ //edit 4
        console.log("is eaven and mod of 4") //edit line value 4
        console.log("break now")
        console.log("test1") //add line
        break
    }
    console.log(k)
}