import React from 'react'
import { ReactDOM } from 'react'
import { v4 as uuidv4 } from 'uuid';

const todos=[
    { id: uuidv4(),
      title:"todo1",
  desc:"todo one description one"
},
{
  id: uuidv4(),
  title:"todo1",
desc:"todo one description one"
},
{
  id: uuidv4(),
  title:"todo1",
desc:"todo one description one"
},
{
  id: uuidv4(),
  title:"todo1",
desc:"todo one description one"
}
]
export default function List() {
  return (
    <div>
      {todos.map((todo)=>{
        const {id,title,desc}=todo
        return <div key={id}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      })}
    </div>
  )
}

