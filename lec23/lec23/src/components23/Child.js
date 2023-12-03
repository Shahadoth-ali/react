import React from 'react'

export default function (props) {

    //this data is passing to parent component
    const data="i am from child component and my destination is parent component";
    props.onChildData(data);
  return (
    <div>
      <p>i am child component</p>
<p>{props.data}</p>
    </div>
  )
}
