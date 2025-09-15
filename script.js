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

//main
let number1 
let number2 
let operation 
console.log(operate(1, 2, "+"))
console.log(operate(6, 7, "*"))
