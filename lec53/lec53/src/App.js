import React, { useState } from 'react'
import Message from './component53/Message';





const App = () => {

  const[count,setCount]=useState(0);
  console.log("app redering")


  return (
    <div>
     <h1>Count:{count}</h1>
     <button onClick={()=>{
      setCount((count)=>count+1);
     }}>Increment</button>

     <Message />
    </div>
  )
}

export default App

