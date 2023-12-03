import React from 'react';
import ReactDOM from 'react-dom/client';

const name="md shahadoth ali"
const date=new Date();
const year=date.getFullYear();
const month=date.getMonth();
const dat=date.getDate();

// const addingStyle={
//   backgroundColor:"purple",
//   color:"red",
//   textAligin:"center",
//   padding:"15px"
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    <h1 className='addingStyle'>welcome to react app</h1>
    <h2>{name}</h2>
   <h3>{dat+"/"+month+"/"+year}
   </h3>
  </div>
 
);


