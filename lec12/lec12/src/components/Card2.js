import React, { Component } from 'react'
import { ReactDOM } from 'react'

export default class Card2 extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.des}</p>
      </div>
    )
  }
}
