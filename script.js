function add(value1, value2){
  let result = value1 + value2
  return result
}

function subtract(value1, value2){
  let result = value1 - value2
  return result 
}

function multiply(value1, value2){
  let result = value1 * value2
  return result 
}

function divide(value1, value2){
  let result = value1 / value2
  return result 
}

function operate(value1, value2, operation){
  if (operation === "+"){
    result = add(value1, value2)
  } else if (operation === "-"){
    result = subtract(value1, value2)
  } else if (operation === "*"){
    result = multiply(value1, value2)
  } else if (operation === "/"){
    result = divide(value1, value2)
  }
  return result
} 

function display(string){
  let screenText = document.createElement("p")
  let screenNode = document.createTextNode(string)
  screenText.appendChild(screenNode)
  screenContainer.appendChild(screenText)
}

//Initialising variables 
number0 = document.getElementById("number-0")
number1 = document.getElementById("number-1")
number2 = document.getElementById("number-2")
number3 = document.getElementById("number-3")
number4 = document.getElementById("number-4")
number5 = document.getElementById("number-5")
number6 = document.getElementById("number-6")
number7 = document.getElementById("number-7")
number8 = document.getElementById("number-8")
number9 = document.getElementById("number-9")
add = document.getElementById("add")
subtract = document.getElementById("subtract")
multiply = document.getElementById("multiply")
divide = document.getElementById("divide")
equals = document.getElementById("equals")
clear = document.getElementById("clear")
screenContainer = document.getElementById("screen-container")

