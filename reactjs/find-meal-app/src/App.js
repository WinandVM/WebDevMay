import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import APIFetch from './actions/fetchActions'
import {Database} from './context/index'
function App() {
  const myStr = "Hello World"
  const Numbers = [1, 2, 3, 4, 5]
  const myObj = {
    name: "John Doe",
  }
  const isUserLoggedIn = true
  const EventHandler =()=>{
    console.log('button clicked')
  }
  const users = [
    {
      id:1,
      name:"John Doe",
    },
    {
      id:2,
      name:"Jane Doe",
    }
  ]
  useEffect(() => {
    
  }, [])
  return (
    <Database.Provider value={[myStr,Numbers,myObj,isUserLoggedIn,EventHandler,users]}>
      <div className="container-fluid bg-dark text-light p-4">
      <h1>App.js</h1>
      </div>
    </Database.Provider>
  )
}

export default App