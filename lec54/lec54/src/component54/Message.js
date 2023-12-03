import React, { memo, useMemo } from 'react'




const Message = ({numberOfMessage,onHandleIncrement}) => {
    console.log("message rendering")

const finalNumber =useMemo(
    ()=>{
        let number=0
        for(let index=0;index<5000000000;index++){
            number++;
        } 
        return number
    },[])





  return (
    <div>
        <h2>Number:{finalNumber}</h2>
        <p>
      send {numberOfMessage} message
    </p>
   <button onClick={onHandleIncrement}>Increment Message no.</button> 
    </div>
  )
}

export default memo(Message)
