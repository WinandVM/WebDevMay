// Math Object - index.js
var result;

// PI number
result = Math.PI;

// round method
result = Math.round(2000.4)

// power method
result = Math.pow(2, 3);

// Square root method
result = Math.sqrt(64)

// Find max number
result  = Math.max(44,55,66,77,88,22,99)

let numbers = [44,55,66,77,88,22,99]
// Find min number
result = Math.min(...numbers)

// Absolute value method
// result = Math.abs(-66)

// Random number
result = Math.random() // 0 to 0.9999999999999999 // 0-10 // 0-100
result = Math.round((Math.random()*10))


function GetRandomNumberRange(min,max){
    return Math.round(Math.random()*(max-min)+min)
}

result  = GetRandomNumberRange(1,100)

console.log(result)