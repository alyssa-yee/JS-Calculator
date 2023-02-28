// Write a calculator web app in JavaScript, HTML, and CSS with the following features:
// 1.	Has an output field that represents the numbers input or the answer
// 2.	Has number buttons representing all numbers (0-9)
// 3.	Has a decimal (.) button to make decimals that can only be used once (e.g. 3.5 – OK, 4.5.6 – not OK)
// 4.	Has arithmetic action buttons for addition, subtraction, multiplication, and division
// 5.	Has an equals button that outputs the result from the calculation of the first and second numbers input and the arithmetic action clicked
// 6.	Has a clear button that clears the inputs, arithmetic actions, and output field

// Here are some additional requirements:
// 1.	The numbers clicked from the number buttons should be appended to the numbers in the output field until an arithmetic action button is pressed. Once an arithmetic action is pressed, a new number can be input.
// 2.	The arithmetic action button should be highlighted after it is clicked to show what operation is occurring. The button stays highlighted until another number is input, another arithmetic action button is pressed, or the equals or clear buttons are pressed.
// 3.	When the equals button is pressed a second time, it performs the last action with the answer being the first number input (e.g. 2+4 click equals -> 6, click equals again equates to 6+4 -> 10, click equals again equates to 10+4 -> 14)
// 4.	When an arithmetic action button is clicked again, after a number is input, an arithmetic action button is clicked and a second number is input, it effectively acts as an equals button and makes the arithmetic action button clicked now active and highlighted
// 5.	Have different colors for number buttons, arithmetic actions and equals buttons, and clear buttons
// 6.	All buttons and output should be arranged in a grid with a background and border



var value = document.getElementById("result").innerHTML;
var first_input = "";
var second_input = "";
var answer;
var current;
var temp;
var operation;

function combine(first_input, second_input, operation){
    answer = first_input + operation + second_input
}

function reset_func(){
    first_input = ""
    second_input = ""
    document.getElementById("result").innerHTML = first_input;
    document.getElementById("decimal-btn").disabled = false;
}


function btnPress(clicked){
    switch(clicked){
    case "0":
        first_input += "0"
        document.getElementById("result").innfirst_input;
        break; 
    case "1":
        first_input += "1"
        document.getElementById("result").innerHTML = first_input;
        second_input = first_input
        console.log("second_input: ", second_input)
        break;
    case "2":
        first_input += "2"
        document.getElementById("result").innerHTML = first_input;
        break;
    case "3":
        first_input += "3"
        document.getElementById("result").innerHTML = first_input;
        break;
    case "4":
        first_input += "4"
        document.getElementById("result").innerHTML = first_input;
        break
    case "5":
        first_input += "5"
        document.getElementById("result").innerHTML = first_input;
        break;
    case "6":
        first_input += "6"
        document.getElementById("result").innerHTML = first_input;
        break;
    case "7":
        first_input += "7"
        document.getElementById("result").innerHTML = first_input;
        break;
    case "8":
        first_input += "8"
        document.getElementById("result").innerHTML = first_input;
        break;
    case "9":
        first_input += "9"
        document.getElementById("result").innerHTML = first_input;
        break;
    case "decimal-btn":
        first_input += "."
        document.getElementById("decimal-btn").disabled = true;
        document.getElementById("result").innerHTML = first_input;
        break;
    case "add-btn":
        operation = "+"
        second_input += operation //1(F1) +(OPERATION)
        console.log("first_input: ", first_input)
    }
}


function multiplication(){
    var input = document.getElementById("number-btn").value;
    // alert(input)
    // document.getElementById('result').innerHTML
}

function division(){
    value /= value;
}

function addition(){
    value = 20
    document.getElementById("result").innerHTML = value;
}

function subtraction(){

}

function result(){

}

function softReset(){
    document.getElementById("decimal-btn").disabled = false;
}

function equals(){
    // equationOut = eval(equationIn)
    answer = eval(first_input);
    document.getElementById("result").innerHTML = answer;
    console.log("answer: ", answer)
}

//1+1 = 2, always the recent equationIN

//1(EI) +(PLUS) 1(EI) = 2(EO)
//2(EO) +(PLUS) 1(EI)

//1(F1) +(PLUS) 1(F2) = 2(A)
//2(A) +(PLUS) 1(F2) = 3(A)
//2(A) +(PLUS) 1(F2) = 4(A)


