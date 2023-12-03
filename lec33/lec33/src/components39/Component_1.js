import React, { useState } from 'react'
import Component_2 from './Component_2';
import { UserContext } from './UserContext';

const Component_1 = () => {

    const[user,setUser]=useState({id:117,
        name:"rubayet hossain"});

    const [text,setText]=useState("hello i am the text")    
  return (
    <UserContext.Provider value={{user,text}}>
      <Component_2 />
    </UserContext.Provider>
  )
}

export default Component_1