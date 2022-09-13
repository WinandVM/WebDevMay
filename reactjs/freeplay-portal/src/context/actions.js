let base_url = '';
const axios = require('axios').default
const FetchAction = {
    GameList: async function(){
        let response = await axios.get(`${base_url}/api/games`)
        return response.data
    },
    Game: async function(id){
        let response = await axios.get(`${base_url}/api/game?id=${id}`)
        return response.data
    },
    GamesByCategory: async function(category){
        let response = await axios.get(`${base_url}/api/games?category=${category}`)
        return response.data
    },
    GamesByPlatform: async function(platform){
        let response = await axios.get(`${base_url}/api/games?platform=${platform}`)
        return response.data
    },
    GamesSortBy: async function(sort){
        let response = await axios.get(`${base_url}/api/games?sort-by=${sort}`)
        return response.data
    },
    GamesByPlatformCategoryAndSort: async function(platform, category, sort){
        let response = await axios.get(`${base_url}/api/games?platform=${platform}&category=${category}&sort-by=${sort}`)
        return response.data
    },
    GetGames: async function(url){
        let response = await axios.get(url)
        return response.data
    }
}

export default FetchAction