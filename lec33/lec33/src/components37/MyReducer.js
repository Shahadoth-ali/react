 export const reducer=(state,action)=>{
    //action.type,action.payload
    if(action.type==="ADD"){
const allBooks=[...state.books,action.payload]
return {
    ...state,
    books:allBooks,
    isModalOpen:true,
    modalText:"book is added successfully"
}
    }
if(action.type==="REMOVE"){
    //REMOVE
    const filteredBooks=[...state.books].filter
    (book=>book.id !== action.payload);
    return{
        ...state,
        books:filteredBooks,
        isModalOpen:true,
        modalText:"book is remove",
    }
}
    return state;
}