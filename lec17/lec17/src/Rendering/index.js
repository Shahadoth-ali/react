import React, { Component } from 'react'
import { ReactDOM } from 'react'
import Home from './Home'
import Login from './Login'

 class Rendering extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn:false
  }
}





  render() {
    // return (
    //   <div>
    //     hi
    //   </div>
    // )

    //rendering with the help of if else

  //   if(this.state.isLoggedIn){
  //     return <Home />
  //   }
  //  else{
  //   return <Login />
  //  }


 //rendering with the help of element variable

//  const {isLoggedIn}=this.state;
//  let element;
// if(isLoggedIn){
//   element=<Home />
// }
// else{
//   element=<Login />
// }
// return(
//  <div>{element}</div>
// )


//rendering with the help of turnary operator

const {isLoggedIn}=this.state;
let element;
element=isLoggedIn?<Home /> : <Login />
return(
  <div>
    {element}
  </div>
)
  }
}
export default Rendering

