import React, { useState } from 'react'

function Toggle() {

const [toggle,setToggle]=useState(true);


  return (
    <div>
   {toggle && (
     <p style={{margin:"1rem",backgroundColor:"pink",padding:"1rem"}}>Diam accusam no invidunt erat diam
     gubergren erat. Amet duo diam diam vero
      amet ut. Sadipscing
       invidunt invidunt voluptua vero.</p>
   )}
           <div style={{textAlign:"center"}}>
           <button onClick={()=>{setToggle(!toggle)}}>{toggle?"hide":"show"}</button>
          
           </div>
    </div>
  )
}

export default Toggle
