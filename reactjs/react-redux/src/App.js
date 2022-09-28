import React,{useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {getPosts,getPostById,getUserById} from './redux/reducer'

function App() {
    const { news, loading,singlenews,user } = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getPosts())
    },[])
  return (
    <div>
        {
          console.log(singlenews,user)
        }
       
        <button onClick={()=>dispatch(getUserById(1))}>Fetch News</button>
    </div>
  )
}

export default App