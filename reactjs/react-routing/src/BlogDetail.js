import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetail() {
    const {pid} = useParams()
    const [detail,setDetail] = useState([])
    
    const fetchingData = async()=>{
        console.log('aaaaa')
        // https://jsonplaceholder.typicode.com/posts/1
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`)
        let data = await response.json()
        setDetail(data)
    }

    useEffect(()=>{
        fetchingData()
    },[])
   
  return (
    <div>
        BlogDetail {pid}
       
            <h1>{detail.title}</h1>
       
    </div>
  )
}

export default BlogDetail