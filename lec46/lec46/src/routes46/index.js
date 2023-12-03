import React, { useState } from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from '../components46/Home'
import AddBlog from '../components46/AddBlog'
import About from '../components46/About'
import Error from '../components46/Error'
import Navbar from '../layout46/Navbar'
import Protected from './Protected'

const Index = () => {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <BrowserRouter>
    <Navbar />
    {isLoggedIn ?<button onClick={()=>{
      setIsLoggedIn(!isLoggedIn)
    }}>Log out</button>:
     <button onClick={()=>{
      setIsLoggedIn(!isLoggedIn)
     }}>Log In</button>}

    <Routes>
        <Route path='/' element={<Home />}>

        </Route>

        <Route path='/add-blog' element={<Protected isLoggedIn={isLoggedIn}>
<AddBlog />
        </Protected> }></Route>

        <Route path='/about' element={<About />}></Route>
        
        <Route path='*' element={<Error />}></Route>
    
    </Routes>
    </BrowserRouter>
  )
}

export default Index
