// fetch api
// http://testphp.vulnweb.com/login.php
// https://insomnia.rest/download
// sudo npm i json-server -g
// json-server data.json -p 5000
// CTRL + C
// http://g.com/register?user=admin&pass=admin

// {
// 	"username":"root",
// 	"password":"root123"
// }

// http://localhost:5000/products/1 > 
// products/8
// http://localhost:5000/api

// fetch('http://localhost:5000/api')
// .then(response=>{
//     setTimeout(()=>{
//         console.log('hello')
//     },2000)
//     return response.json()
// })

// // promise chain method then()
// .then(data=>{

//     // iterate through the data
//     data.forEach(user=>{
//         console.log(user)
//     })
// })
// .catch(err=>console.log(err))

// fetch('http://localhost:5000/api')
// .then(res=>res.json())
// .then(data=>data)
// .then(data=>{
//     data.map(user=>{
//         user.username = user.username.toUpperCase() // 'atilla' = 'atilla'.toUpperCase()
//     })
//     return data
// })
// .then(data=>console.log(data))

// async function getUsers(){
//     let response = await fetch('http://localhost:5000/api')
//     return response.json()
// }

// getUsers()
// .then(data=>{
//     console.log(data)
// })

// select tbody element.
const TbodyResult = document.getElementById('result')

// fetching data from the server
let getUsers = new Promise((resolve,reject)=>{
    fetch('http://localhost:5000/api')
    .then(res=>res.json())
    .then(data=>{
        resolve(data)
    })
    .catch(err=>reject(err))
})

// get JSON data
getUsers
.then(data=>{
    // iterate through the data
    data.forEach(user=>{
        // print the data in the table in html document.
        TbodyResult.innerHTML += `<tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>
    </tr>` 
    })
  //  let result = data.map(({username})=>({username}))
   // console.log(result)

})

// https://jsonplaceholder.typicode.com/users

const users = [

]

// step1 get all original data
// step2 extract specific properties from user 
// {id:1,username:atilla,password:123}
// step3 users.push({})
// step4 users
