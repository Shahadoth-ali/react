import React, { memo } from 'react'




const Message = () => {
    console.log("message rendering")

  return (
    <p>
      send five message
    </p>
  )
}

export default memo(Message)

