import React, { Component } from 'react'
import { ReactDOM } from 'react'


export default class Lec19 extends Component {

constructor(props) {
  super(props)

  this.state = {
     count:0
  }
  //this is known as binding
  this.handleClick=this.handleClick.bind(this)
}

//we should not find any problem with es6 code

// handleClick=()=>{
//     this.setState({
//         count:this.state.count+1
//     })
// }


//we need binding for non es6 code

handleClick(){
    this.setState({
        count:this.state.count+1
    })
}


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
       <button onClick={this.handleClick}>increase</button>
      </div>
    )
  }
}
