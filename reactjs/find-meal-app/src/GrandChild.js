import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import Database from './context/index'
// consumer context
function GrandChild() {
    // use context datas
    // const [myStr, Numbers, myObj, isUserLoggedIn, EventHandler, users,setCount,count] = useContext(Database)
  const MyContext = useContext(Database)
 
    return (
       <>
        <h1>GrandChild.js</h1>
        {
            console.log(MyContext.count)
        }
        <h1>{MyContext.count}</h1>
        <Button onClick={()=>MyContext.setCount(MyContext.count+1)}>Click Me</Button>
        <Button onClick={()=>MyContext.setCount(MyContext.count-1)}>Click Me</Button>
       </>
    )
}

export default GrandChild