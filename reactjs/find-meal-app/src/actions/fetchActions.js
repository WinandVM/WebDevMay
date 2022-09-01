const APIFetch ={
    getAllPosts:async function(){
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let data = await response.json()
        return data
    },
    getPostById:async function(id){
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        let data = await response.json()
        return data
    },
    getAllUsers:async function(){
        let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        let data = await response.json()
        return data
    },
    getUserById:async function(id){
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        let data = await response.json()
        return data
    }
}

export default APIFetch