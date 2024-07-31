function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if (b === 0) {
        alert("Cannot divide by zero!");
        return NaN;
    }
    return a/b;
}

let num1="";
let num2="";
let operator="";

function operate(a,b, operator){
    if(operator == "+"){
        add(a,b);
    }else if(operator == "-"){
        subtract(a,b);
    }else if(operator == "*"){
        multiply(a,b);
    }else{
        divide(a,b);
    }
}

const numButtons = document.querySelectorAll("#number");
const display = document.querySelector(".display");
let displayValue="";
numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator == "") {
            num1 += button.textContent;
        } else{
            num2 += button.textContent;
        }
        displayValue+=button.textContent;
        display.textContent = displayValue;
    });
});

const operators = document.querySelectorAll("#operator");
const equals = document.querySelector("#equals");
operators.forEach((button) => {
    button.addEventListener("click", () => {
        if(operator == ""){
            displayValue += button.textContent;
            operator = button.textContent;
            display.textContent=displayValue;
        }
    });
});

equals.addEventListener("click", () => {
    num1 = Number(num1);
    num2 = Number(num2);
    if(operator=="+"){
        num1 = add(num1,num2);
    } else if(operator == "-"){
        num1 = subtract(num1,num2);
    } else if(operator == "*"){
        num1 = multiply(num1,num2);
    } else{
        num1 = divide(num1,num2);
    }
    displayValue = num1;
    display.textContent = displayValue;
    num2 = "";
    operator = "";
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    displayValue = "";
    display.textContent = displayValue;
});


