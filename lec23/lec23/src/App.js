import React from 'react'
import { ReactDOM } from 'react'


import Child from './components23/Child'

export default function App() {

//following code is for sending data to child
    const data="i am from parent (app)"

//following code for bringing data from child
//akta method k patabo j data niye asbe
const handleData=(childData)=>{
console.log(childData)
}
  return (
    <div>
     <Child data={data} onChildData={handleData}/>
    </div>
  )
}
