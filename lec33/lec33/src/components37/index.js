import React, { useReducer, useState } from 'react'
import { reducer } from './MyReducer'

const booksData=[
    {id:1,name:"pather dabi"},
    {id:2,name:"sojon badiyar ghat"},
    {id:3,name:"debdas"},
    {id:4,name:"sesh prosno"}

]

const Modal=({modalText})=>{
   return   <p>{modalText}</p>
}


const UseReducer = () => {

// const [books,setBooks]=useState(booksData);
// const [isModalOpen,setIsModalOpen]=useState(false);
// const [modalText,setModalText]=useState("");

const [bookState,dispatch]=useReducer(reducer,{
    books:booksData,
    isModalOpen:false,
    modalText:""
})
const [bookName,setBookName]=useState("");



const handleSubmit=(e)=>{
e.preventDefault();
    const newBook={id:new Date().getTime().toString
    ,name:bookName};

    dispatch({type:"ADD",payload:newBook})
setBookName("");

//   setBooks((prevState)=>{
//     const newBook={id:new Date().getTime().toString
//     ,name:bookName};
//    return [...prevState,newBook] 
//   })
//   setIsModalOpen(true);
//   setModalText("book is added successfully")
}

const removeBook=(id)=>{
dispatch({type:"REMOVE",payload:id})
}

  return (

    <div>
      <h3>Book List</h3>

<form onSubmit={handleSubmit}>
   <input type='text' value={bookName}
    onChange={(e)=>{
        setBookName(e.target.value)
}}/>
<button type='submit'>Add Book</button>
</form>

{bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}

      {bookState.books.map((book)=>{
        const {id,name}=book;
        return <li key={id}>
            {name}
            <button onClick={()=>{
                removeBook(id)
            }}>Remove</button>
        </li>
      })}
    </div>
  )
}

export default UseReducer
