import React, { useContext } from 'react'
import { UserContext } from './UserContext'




const Component_4 = () => {

const {user,text}=useContext(UserContext);
console.log(user)
console.log(text);


  return (
    <div>
      hello i am component four
      <p>ID:{user.id}</p>
      <p>Name:{user.name}</p>
      <h2>{text}</h2>
    </div>
  )
}

export default Component_4
