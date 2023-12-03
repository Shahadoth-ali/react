import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { blogsData } from '../Data';



const Blog = () => {
    const location=useLocation();

    const {title}=useParams();
    // const [bodyData,setBodyData]=useState("");


//    useEffect(()=>{
//    const blogData= blogsData.filter((blog)=>blog.title===title)
//    setBodyData(blogData[0].body)
//    },[]);
   
   
  return (
    <div>
      <h1>{title}</h1>
      {/* <p>{bodyData.slice(0,500)}</p>
      <p>{bodyData.slice(500,800)}</p> */}
      <p>{location.state.body.slice(0,500)}</p>
      <p>{location.state.body.slice(0,500)}</p>
    </div>
  )
}

export default Blog
