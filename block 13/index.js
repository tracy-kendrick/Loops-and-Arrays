let v = ""
if(v){
    console.log(true)
}
else if(v === false){
    console.log("The boolean value false is falsy")
}
else if(v === null){
    console.log("The null value is falsy")

}
else if(v === undefined){
    console.log("undefined is falsy")
}
else if(v === 0){
    console.log("The number 0 is falsy(the only falsy number)")
}
else if(v === ""){
    console.log("The empty string is falsy(the only falsy string)")
}



num1+num2

let num1 =-5
let num2 =-0
let sum = num1 + num2

if (sum > 100){
    console.log(sum+"is greater than 100")
    
}
else if(sum > 0){
    console.log(sum+"is greater than 0")
}
else if(sum >= 0){
    console.log(sum+ "is equal to 0")
}
else if(sum <= 0){
     console.log(sum+" is a negative number")
}

let num1 = 5
let num2 = 5

if(num1 >= 5 && num2 >= 5){
    console.log("true")
}
else{
    console.log(false)
}

let param1A = "cake"
let param1B = "cake"
let param2A = "pie"
let param2B = "pie"

if(param1A === param1B || param2A === param2B){
    console.log(true)
}
else{
    console.log(false)
}