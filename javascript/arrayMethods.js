// array methods
var result;
var myArr = [];
var myNumbers = [5, 6, 7, 2, 9, 33, 100, 15, 10, 66, 11, 99, 77]
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

let emptyArray = [4, 6, 'john', 'intec', 'koc']
function NewForLoop(value, index, arrayitself) {
    console.log(value, index, arrayitself)
}
// result.forEach(NewForLoop)

// for(let i=0; i<emptyArray.length;i++){
//     console.log(emptyArray[i],emptyArray.length)
// }

var total = 0
// for(let i=0;i<myNumbers.length;i++){
//     //console.log(myNumbers[i])
//     total+=myNumbers[i]
//     console.log(total)
// }

myNumbers.forEach((n) => total += n)
result = `Total result is ${total}`

// result.map(NewForLoop)


// filter method

function FilterCallBack(value) {
    return value >= 30
}

let posts = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
},
{
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
}]

result = myNumbers.filter(value => value >= 30)
// result = posts.filter(value=>{
//    return value.id === 5
// })

function FindPostById(id){
    return posts.filter(value=>value.id===id)
}

result = FindPostById(5)

console.log(result)