import React, { useEffect, useState,useRef } from 'react'
import { Button } from 'react-bootstrap'

function Blog() {
    const [posts,setPosts] = useState([]) // save data here
    const getAllPosts = async ()=>{ // retrieve data
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await response.json()
        setPosts(posts)
    }

    const buttonRef = useRef()
    const inputRef = useRef()
    useEffect(()=>{ // run your code auto
        getAllPosts()
        console.log(buttonRef.current)
        console.log(inputRef.current.value)
    },[])
  return (
    <div>
        <Button onClick={getAllPosts} ref={buttonRef}>Get and Print Posts</Button>
        <input type="text" ref={inputRef} value='Search something...'/>
        {
            posts.map((post,index)=>(
                <a href={`/blog/${post.id}`} key={post.id} className="d-block">{post.title}</a>
            ))
        }
    </div>
  )
}

export default Blog