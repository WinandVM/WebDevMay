import React, { useEffect } from 'react'
import APIFetch from './actions/fetchActions'

// https://jsonplaceholder.typicode.com/
function App() {

    useEffect(() => {
        
        APIFetch.getAllPosts()
        .then(data=>{
            console.log(data)
        })

        
    }, [])
    return (
        <div>
            <h1>testtttt</h1>
        </div>
    )
}

export default App