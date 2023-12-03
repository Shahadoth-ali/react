import React, { useState } from 'react'
import Component_2 from './Component_2';

const Component_1 = () => {

    const[user,setUser]=useState({id:117,
        name:"shahadoth"});
  return (
    <div>
      <Component_2 user={user}/>
    </div>
  )
}

export default Component_1
