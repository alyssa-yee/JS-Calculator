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
var equationIn = "";
var equationOut = "";
var current;
var temp;

function test(input){

}

function btnPress(clicked){
    switch(clicked){
    case "0":
        equationIn += "0"
        document.getElementById("result").innerHTML = equationIn;
        break; 
    case "1":
        equationIn += "1"
        document.getElementById("result").innerHTML = equationIn;
        break;
    case "2":
        equationIn += "2"
        document.getElementById("result").innerHTML = equationIn;
        break;
    case "3":
        equationIn += "3"
        document.getElementById("result").innerHTML = equationIn;
        break;
    case "4":
        equationIn += "4"
        document.getElementById("result").innerHTML = equationIn;
        break
    case "5":
        equationIn += "5"
        document.getElementById("result").innerHTML = equationIn;
        break;
    case "6":
        equationIn += "6"
        document.getElementById("result").innerHTML = equationIn;
        break;
    case "7":
        equationIn += "7"
        document.getElementById("result").innerHTML = equationIn;
        break;
    case "8":
        equationIn += "8"
        document.getElementById("result").innerHTML = equationIn;
        break;
    case "9":
        equationIn += "9"
        document.getElementById("result").innerHTML = equationIn;
        break;
    case "decimal-btn":
        equationIn += "."
        document.getElementById("decimal-btn").disabled = true;
        document.getElementById("result").innerHTML = equationIn;
        break;
    case "add-btn":
        if(current == "+"){
            if(temp == ""){
                break;
            } else {
                equationOut += "+"
                equationOut += temp;
                equals();
                break;
            }

        } else {
            temp = equationIn
            equationOut += equationIn
            equationOut += "+"
            equationIn = ""
            document.getElementById("result").innerHTML = 0;
            softReset();
            break;
        }
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

function reset(){
    value = 0;
    document.getElementById("result").innerHTML = value;
    document.getElementById("decimal-btn").disabled = false;
}

function softReset(){
    document.getElementById("decimal-btn").disabled = false;
}

function equals(){
    current = "=";
    console.log(equationOut) //3+
    console.log(equationIn)  // 6
    equationOut += equationIn
    console.log(equationOut) //3+6
    equationOut = eval(equationOut);
    document.getElementById("result").innerHTML = equationOut;
}

