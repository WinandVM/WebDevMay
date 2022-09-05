let base_url = "https://jsonplaceholder.typicode.com"
const APIFetch ={
    getAllPosts:async function(){
        let response = await fetch(`${base_url}/posts`)
        let data = await response.json()
        return data
    },
    getPostById:async function(id){
        let response = await fetch(`${base_url}/posts/${id}`)
        let data = await response.json()
        return data
    },
    getAllUsers:async function(){
        let response = await fetch(`${base_url}/users`)
        let data = await response.json()
        return data
    },
    getUserById:async function(id){
        let response = await fetch(`${base_url}/users/${id}`)
        let data = await response.json()
        return data
    },
    getAllQuestions:async function(){
        let response = await fetch(`https://opentdb.com/api.php?amount=10&category=18`)
        let data = await response.json()
        return data
    }
}

export default APIFetch