import React, { useEffect, useState } from 'react'


const loadingMessage=<p>
data is loading
</p>

const DataFetch = () => {

    const[todos,setTodos]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
const [error,setError]=useState(null);


useEffect(()=>{
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")

    .then((res)=>{
        if(!res.ok){
            throw Error("fetching is not successful")
        }
        return res.json()
    })
    .then((data)=>{
        setTodos(data);
        // console.log(todos)
   setIsLoading(false);
   setError(null);
    })
    .catch((error)=>{
      setError(error.message)
      setIsLoading(false);
    })
  }, 2000);
},[]);




    const todosElement=  todos &&
    todos.map((todo)=>{
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
