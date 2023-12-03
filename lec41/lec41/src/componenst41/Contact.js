import React from 'react'
import { useNavigate } from 'react-router-dom'



const Contact = () => {
    const navigate=useNavigate();


  return (
    <div>
      <h1>this is contact page</h1>
      <p>Consetetur eirmod nonumy labore et
         erat elitr accusam sed amet amet. 
         Invidunt erat sadipscing voluptua 
         sit lorem voluptua sed, sit.
    
      </p>
      <button onClick={()=>{
        navigate("/")
      }}>go to home page</button>
    </div>
  )
}

export default Contact
