// array methods
var result;
var myArr = [];
var myNumbers = [5, 6, 7, 2, 9, 33, 100,15,10, 66, 11, 99, 77]
var myLetters = ['c', 'b', 'a', 'd', 'e', 'g', 'f', 'h', 'j', 'i']
// push method 
myArr.push(1)
myArr.push("a")
myArr.push(true)
myArr.push(null)
myArr.push({ name: "John" })

// pop method
myArr.pop() // last added element is removed

// shift method
myArr.shift() // first added element is removed

// join method
result = myArr.join("-")

// sort method
result = myLetters.sort() // alphabetical order
result = myNumbers.sort(function (a, b) {
    return b - a
}) // numerical order

// concat method
result = myNumbers.concat(myLetters) // combines two arrays

// iteration methods {for, forEach, map, filter, reduce, every, some}
// for(var i=0;i<result.length;i++){
//     console.log(result[i])
// }

let emptyArray=[4,6,'atilla','intec','koc']
function NewForLoop(value, index, arrayitself) {
    console.log(value, index, arrayitself)
}
// result.forEach(NewForLoop)

// for(let i=0; i<emptyArray.length;i++){
//     console.log(emptyArray[i],emptyArray.length)
// }

var total=0
// for(let i=0;i<myNumbers.length;i++){
//     //console.log(myNumbers[i])
//     total+=myNumbers[i]
//     console.log(total)
// }

myNumbers.forEach((n)=>total+=n)
result = `Total result is ${total}`

// result.map(NewForLoop)





console.log(result)