import React, { useEffect } from 'react'

function App() {
    useEffect(()=>{
        fetch('/jsonplaceholder/users',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            data:JSON.stringify({
                name:'John Doe'
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    })
  return (
    <div>App</div>
  )
}

export default App