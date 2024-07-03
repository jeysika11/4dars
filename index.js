

let num1 = prompt ("raqamni kiriting")
let amal = prompt ("arifmetik amalni kiriting")
let num2 = prompt ("ikkinchi raqamni kiriting")

let result = amal == "+" ? parseInt(num1) + parseInt(num2) : amal == "-" ? num1 - num2 : amal == "*" ? num1*num2 : amal == "/" ? num1/num2 : "noto'gri amal"
console.log(result)



alert(result)