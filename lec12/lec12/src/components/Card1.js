import React from 'react'
import { ReactDOM } from 'react'

export default function Card1(props) {
  return (
    <div>
     <h3>{props.name}</h3>
    <p>{props.des}</p>
    </div>
  )
}
