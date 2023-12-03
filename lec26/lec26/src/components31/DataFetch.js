import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'


const loadingMessage=<p>
data is loading
</p>

const DataFetch = () => {

    const {data,isLoading,error}=useFetch("https://jsonplaceholder.typicode.com/todos")

    const todosElement=  data &&
    data.map((todo)=>{
    return <p key={todo.id}>{todo.title}</p>
    })

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
{todosElement}
      {isLoading && loadingMessage}
    
    </div>
  )
}

export default DataFetch