import React, { useState } from 'react'

export default function Lec201() {


const[count,setCount]=useState(0)

const handleIncrement=()=>{
setCount(count+1)
}


  return (
    <div>
        <h1>count:{count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </div>
  )
}
