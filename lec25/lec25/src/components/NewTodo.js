import React, { useState } from 'react'
import style from './newtodo.module.css'

function NewTodo(props) {

const [todo,setTodo]=useState({title:"",desc:""});
const {title,desc}=todo;


const handleSubmit=(event)=>{
event.preventDefault();
props.onAddTodo(todo)
setTodo({title:"",desc:""});
}

const handleChange=(event)=>{
    const name=event.target.name;
    setTodo((oldTodo)=>{
        return {...oldTodo,[name]:event.target.value}
    })
}

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor='title'>Title:</label>
        <input type='text' onChange={handleChange} id='title' value={title} name='title'/>
      </div>

      <div className={style["form-field"]}>
        <label htmlFor='desc'>Description:</label>
        <textarea type='text' onChange={handleChange} id='desc' value={desc} name='desc'/>
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo
