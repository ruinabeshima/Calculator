function Add(value1, value2){
  let result = value1 + value2
  return result
}

function Subtract(value1, value2){
  let result = value1 - value2
  return result 
}

function Multiply(value1, value2){
  let result = value1 * value2
  return result 
}

function Divide(value1, value2){
  if (value2 === 0){
    result = "dumdum"
  } else {
    result = value1 / value2
  }
  return result 
}
// Calculation
function operate(value1, value2, operation){
  if (operation === "+"){
    result = Add(value1, value2)
  } else if (operation === "-"){
    result = Subtract(value1, value2)
  } else if (operation === "*"){
    result = Multiply(value1, value2)
  } else if (operation === "/"){
    result = Divide(value1, value2)
  }
  return result
} 

// Displaying numbers on screen
function display(string){
  const calcDisplayDelete = document.getElementById("calc-display-text")
  if (calcDisplayDelete){
    calcDisplayDelete.remove()
  }

  let screenText = document.createElement("p")
  let screenNode = document.createTextNode(string)
  screenText.appendChild(screenNode)
  screenText.id = "calc-display-text"
  screenContainer.appendChild(screenText)
}

function separateValues(calcString){
  if (operation === "+"){
    value1 = calcString.split("+")[0]
    value2 = calcString.split("+")[1]
  } else if (operation === "-"){
    value1 = calcString.split("-")[0]
    value2 = calcString.split("-")[1]
  } else if (operation === "*"){
    value1 = calcString.split("X")[0]
    value2 = calcString.split("X")[1]
  } else if (operation === "/"){
    value1 = calcString.split("/")[0]
    value2 = calcString.split("/")[1]
  }
}

function getValues(){
  number0.addEventListener("click", function(){
    calcString += "0"
    display(calcString)
  })
  number1.addEventListener("click", function(){
    calcString += "1"
    display(calcString)
  })
  number2.addEventListener("click", function(){
    calcString += "2"
    display(calcString)
  })
  number3.addEventListener("click", function(){
    calcString += "3"
    display(calcString)
  })
  number4.addEventListener("click", function(){
    calcString += "4"
    display(calcString)
  })
  number5.addEventListener("click", function(){
    calcString += "5"
    display(calcString)
  })
  number6.addEventListener("click", function(){
    calcString += "6"
    display(calcString)
  })
  number7.addEventListener("click", function(){
    calcString += "7"
    display(calcString)
  })
  number8.addEventListener("click", function(){
    calcString += "8"
    display(calcString)
  })
  number9.addEventListener("click", function(){
    calcString += "9"
    display(calcString)
  })
  add.addEventListener("click", function(){
    if (operationCounter === 0){
      operation = "+"
      operationCounter += 1
      calcString += "+"
      display(calcString)
    } else if (operationCounter === 1){
      separateValues(calcString)  
      result = operate(Number(value1), Number(value2), operation)
      calcString = result.toString() + "+"
      display(calcString)
    }
  })
  subtract.addEventListener("click", function(){
    if (operationCounter === 0){
      operation = "-"
      operationCounter += 1
      calcString += "-"
      display(calcString)
    } else if (operationCounter === 1){
      separateValues(calcString)  
      result = operate(Number(value1), Number(value2), operation)
      calcString = result.toString() + "-"
      display(calcString)
    }
  })
  multiply.addEventListener("click", function(){
    if (operationCounter === 0){
      operation = "*"
      operationCounter += 1
      calcString += "X"
      display(calcString)
    } else if (operationCounter === 1){
      separateValues(calcString)  
      result = operate(Number(value1), Number(value2), operation)
      calcString = result.toString() + "*"
      display(result.toString() + "X")
    }
  })
  divide.addEventListener("click", function(){
    if (operationCounter === 0){
      operation = "/"
      operationCounter += 1
      calcString += "/"
      display(calcString)
    } else if (operationCounter === 1){
      separateValues(calcString)  
      result = operate(Number(value1), Number(value2), operation)
      calcString = result.toString() + "/"
      display(calcString)
    }
  })
  equals.addEventListener("click", function(){
    operationCounter = 0 
    separateValues(calcString)  
    result = operate(Number(value1), Number(value2), operation)
    calcString = result.toString()
    display(calcString)
  })
  clear.addEventListener("click", function(){
    operationCounter = 0 
    calcString = ""
    display(calcString)
  })
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

let calcString = ""
let operationCounter = 0 
let operation = ""
let value1 = 0 
let value2 = 0 
getValues()


text = "hello,world"
console.log(text.split(",")[1])