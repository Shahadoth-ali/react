import React from 'react'
import styel from './todo.module.css'

function Todo(props) {
    const{title,desc}=props.todo;
    const{id}=props;


    const handleClick=(id)=>{
      props.onRemoveTodo(id);
    }

  return (
<article className={styel.todo}>
<div>"
      <h3>{title}</h3>
      <p>{desc}</p>

    </div>

<div>

    <button className={styel.btn} onClick={()=>{
      handleClick(id)
    }}>
      <i className='fa fa-trash fa-2x'></i>
    </button>
</div>
</article>

  
  )
}

export default Todo
