import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';
import { useState } from 'react';
/*
Classes
Arrow Functions
Variables (let, const, var)
Array Methods like .map()
Destructuring
Modules
Ternary Operator
Spread Operator
*/


function App() {
 
  const [number,setNumber] = useState(1)
  function handleClick(){
    // event click callback
    setNumber(number+1)
    console.log('click event!!!!!',number)
  }

  return (
   <div>
     {/* <ChildComponent name="Coffee"/> */}
   
    {
      // event click in react component
    }
    <button onClick={handleClick}>Do not click it</button>
    <h1>{number}</h1>
   </div>
  );
}

export default App;
