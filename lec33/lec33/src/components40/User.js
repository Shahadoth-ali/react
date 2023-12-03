import React from 'react'
import PropTypes from "prop-types"

const User = (props) => {
  return (
    <div>
      {props.userName}
      <h3>{props.userId}</h3>
    </div>
  )
}

User.propTypes={
 //key-value 
 userName:PropTypes.string, 
 userId:PropTypes.number, 
}

User.defaultProps={
    userName:"default name",
    userId:100,
}

export default User
