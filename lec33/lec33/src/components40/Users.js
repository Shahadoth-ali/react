import React, { useState } from 'react'
import User from './User'




const Users = () => {
    const [userName,setUserName]=useState("shahadoth");
const [userId,setUserId]=useState(117)
  return (
    <>
     <User userName={userName} userId={userId}/>
    </>
  )
}

export default Users
