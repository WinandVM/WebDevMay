import { useRef } from "react"
import { Button } from "react-bootstrap"

export default function Contact({MyFunction}){
    const inputRef = useRef()

    const clickHandler=(e)=>{
        console.log(inputRef.current.value)
    }

    const handleChange= (event)=>{
        console.log(inputRef.current.value,"react hook") // react hook
        console.log(event.target.value, 'event obj') // event obj
    }
    
    return(
        <>
            <h1>Contact</h1>
            <input type="text" ref={inputRef} onChange={handleChange}/>
            <Button onClick={clickHandler}>Get Input Value</Button>
            {
                MyFunction()
            }
        </>
    )
}