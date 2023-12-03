import React, { useState } from 'react'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'
import {v4 as uuidv4} from "uuid"



// const dummyTodos=[
//     {
//         id:1,
//         title:"todo title one",
//         desc:"this is description one for todo  one"
//     },
//     {
//         id:2,
//         title:"todo title two",
//         desc:"this is description one for todo  two"
//     },
// ]

function Home() {

  const [todos,setTodos]=useState([]);

const handleAddTodo=(todo)=>{
 setTodos((prevTodos)=>{
  return [...prevTodos,{id:uuidv4(),todo}]
 })
}

const handleRemoveTodo=(id)=>{
 
 setTodos((prevTodos)=>{
  const filteredTodos=todos.filter((todo=>todo.id !==id))
  return filteredTodos
 })
}

  return (
    <div className={style.container}>

        <h1 style={{color:'white'}}>Todo App</h1>

       <NewTodo onAddTodo={handleAddTodo}/> 

    <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>

    </div>
  )
}

export default Home
