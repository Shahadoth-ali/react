import React, { Component } from 'react'

//Mounting--->constructor,render,componentDidMount
//Updating-->state/props,render
//Unmounting

export default class LifeCycle extends Component {

constructor(props) {
  super(props)

  console.log("constructor")

  this.state = {
    count:0
  }
}


shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
}

componentDidUpdate(){
    console.log("componentDidUpdate")
}

componentDidMount(){
 console.log("componentDidMount")   
}

handleIncrement=()=>{
    this.setState({
        count:this.state.count+1
    })
}


  render() {
    {console.log("rendering")}
    return (
      <div>
        <h1>Conter:{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

