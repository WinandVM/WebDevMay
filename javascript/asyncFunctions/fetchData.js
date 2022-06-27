import fetch from 'node-fetch'

async function getUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    return data;
}

getUsers()
.then(data=>{
    console.log(data)
})