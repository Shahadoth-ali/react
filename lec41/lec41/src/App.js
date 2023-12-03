import React from 'react'
import Home from './componenst41/Home'
import Blogs from './componenst41/Blogs'
import Blog from './componenst41/Blog'
import Contact from './componenst41/Contact'
import User from './componenst41/User'
import Error from './componenst41/Error'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './componenst41/Navbar'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
   <Navbar />
   <Routes>
 
<Route path='/' element={<Home />}/>
<Route path='/contact' element={<Contact />}/>
<Route path='/blogs' element={<Blogs />}/>
<Route path='/blogs/:title' element={<Blog />}/>
<Route path='*' element={<Error />}/>
{/* <Route path='/user/:userid' element={<User />}/> */}
<Route path='/user' element={<User />}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App

