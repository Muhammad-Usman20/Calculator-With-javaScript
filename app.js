                // CALCULATOR

var num1 = +prompt("Enter First Number:", "Enter First Number")
var num2 = +prompt("Enter Second Number:", "Enter Second Number")
var operators = prompt("What Operations would you perform", "+, -, *, /")

if( operators == "+"){
    console.log("The Operation you have perform is Addition:")
    console.log("Addition of two numbers is:", num1+num2 )

} else if ( operators == "-"){
    console.log(" The Operation you have perform is Subtraction:")
    console.log("Subtraction of two numbers is:", num1-num2)

}  else if ( operators == "*"){
    console.log("The Operation you have perform is Multiplication:")
    console.log("Multiplication of two numbers is:", num1*num2)

}else if ( operators == "/"){
    console.log("The Operation you have perform is Division:")
    console.log("Division of two numbers is:", num1/num2)

}else{
    console.log(" Mathametical Error!!!")
}
