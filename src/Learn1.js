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
    if(k%2==0 || k%6 ==0){
        console.log("is eaven and mod of 6")
        console.log("break now")
        //testing merge collisions
        break
    }
    console.log(k)
}