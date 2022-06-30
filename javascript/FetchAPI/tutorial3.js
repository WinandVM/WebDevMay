// 1. Create a new file called data.json
// 2. Run fake api server with json-server `json-server data.json -p 5000`

const getBtn = document.getElementById('get')
const postBtn = document.getElementById('post')
const putBtn = document.getElementById('updateput')
const patchBtn = document.getElementById('updatepatch')
const deleteBtn = document.getElementById('del')

// get request
getBtn.addEventListener('click',(e)=>{
    console.log('hello click')
    fetch('http://localhost:5000/api')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    e.preventDefault()
})

// PUT request
putBtn.addEventListener('click',(e)=>{
    fetch('http://localhost:5000/api/2',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        // must be string data type !JSON.stringify!
        body:JSON.stringify({
            "username":"Joe Dalton"
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`PUT request: ${data}`)
    })
    e.preventDefault()
})

patchBtn.addEventListener('click',(e)=>{
    fetch('http://localhost:5000/api/2',{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "password":"root321321"
        })
    })
    .then(res=>res.json())
    .then(data=>console.log(`PATCH request: ${data}`))
    e.preventDefault()
})

// POST request
postBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('http://localhost:5000/api',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "username":"student001",
            "password":"123456"
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('POST request: ',data)
    })
})

deleteBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('http://localhost:5000/api/3',{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('deleted: ',data)
    })
})