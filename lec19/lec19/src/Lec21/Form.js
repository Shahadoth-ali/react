import React, { useState } from 'react'
import { ReactDOM } from 'react'
import style from './form.module.css'

export default function Form() {

    // const[name,setName]=useState("");
    // const[email,setEmail]=useState("");
    // const[password,setPassword]=useState("");

    const [user,setUser]=useState({name:"",email:"",password:""})
const{name,email,password}=user;



// const handleNameChange=(e)=>{
//   setUser({name:e.target.value,email,password})
// }

// const handleEmailChange=(e)=>{
//   setUser({name,email:e.target.value,password})
// }

// const handlePasswordChange=(e)=>{
//   setUser({name,email,password:e.target.value})
// }

const handleChange=(e)=>{

//console.log(e.target.name);


   const fieldName=e.target.name;
   if(fieldName==='name'){
    setUser({name:e.target.value,email,password})
   }
   if(fieldName==='email'){
    setUser({name,email:e.target.value,password})
   }
   if(fieldName==='password'){
    setUser({name,email,password:e.target.value})
   }


}

const submitHandler=(e)=>{
console.log("form is submitted")
// console.log(name,email,password)
console.log(user)
e.preventDefault();

}

  return (
    <div>
      <h1>Registration</h1>

      <form action='' onSubmit={submitHandler}>


<div className={style.formGroup}>
<label htmlFor='name'>Name:</label>
<input type='text' name="name" id="name" required onChange={handleChange} value={name}/>
</div>

<div className={style.formGroup}>

<label htmlFor='email'>Email:</label>
<input type='email' name="email" id="email" required onChange={handleChange} value={email}/>

</div>

<div className={style.formGroup}>
<label htmlFor='password'>Password:</label>
<input type='password' name="password" id="password" required onChange={handleChange} value={password}/>

</div>

<div className={style.formGroup}>
<button type='submit'>Register:</button>

</div>


      </form>
    </div>
  )
}
