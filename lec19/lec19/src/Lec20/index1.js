import React, { Component } from 'react'
import { ReactDOM } from 'react'

export default class Lec20 extends Component {

constructor(props) {
  super(props)

  this.state = {
     count:5
  }
}



handleIncrement=()=>{
    this.setState({
        count:this.state.count+1
    })
}





  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>increase</button>
      </div>
    )
  }
}
