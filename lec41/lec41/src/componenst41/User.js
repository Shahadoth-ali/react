import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'



const User = () => {

    const [name,setName]=useState("");
    const [searchParams,setSearchParam]=
    useSearchParams();

// const{userid}=useParams();

const handleSubmit=(e)=>{
e.preventDefault();
setSearchParam({name:name})
}

  return (
    <div>
      user
   <form onSubmit={handleSubmit}>
   <input  type='text' value={name} onChange={(e)=>{
        setName(e.target.value);
      }}/>

<button type='submit'>Find User</button>
   </form>


      {/* <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("age")}</h1>
      <h1>{searchParams.get("name")}</h1> */}
      {/* <h1>{userid}</h1> */}
    </div>
  )
}

export default User
