// routing
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/Home'
import GameDetail from './pages/GameDetail'
import './styles/globals.scss'
import Context from './context/index'
import FetchAction from './context/actions'
function App() {
    const [options,setOptions] = useState({
        platform:'',
        category:'',
        sort:'',
    })

    const [games,setGames] = useState([])
    return (
        <Context.Provider value={{FetchAction,options,setOptions,games,setGames}}>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/:gameId" element={<GameDetail/>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </Layout>
        </Context.Provider>
    )
}

export default App