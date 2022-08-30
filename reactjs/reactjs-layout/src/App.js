import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Contact from './Contact'
import Home from './Home'
import MovieDetail from './MovieDetail'
import SearchResults from './SearchResults'
function App() {
    // https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1&query=Joker
    const [result,setResult] = useState([])
    const [inputValue,setInputValue] = useState('')
    const inputHandler = (e) =>{
        if(e.target.value !==''){
            setInputValue(e.target.value)
        }else{
            setInputValue('a')
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1&query=${inputValue!==''?inputValue:'a'}`)
        .then(response=>response.json())
        .then(data=>{
            setResult(data.results)
        })
    }
    const searchResult = ()=>{
        console.log('This is search handler')
        // setResult([{
        //     id:1,
        //     name:'Batman & Joker'
        // }])
    }
    return (
        <Layout searchResultHandler={searchResult} inputHandler={inputHandler}>
            <Routes>
                <Route path='/' element={<Home inputValue={inputValue} result={result} />} />
                <Route path='/search' element={<SearchResults result={result}/>}/>
                <Route path='/:movie_id' element={<MovieDetail/>}/>
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Layout>
    )
}

export default App