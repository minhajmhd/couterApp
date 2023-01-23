import React from 'react'

function User({username,age}) {
    // console.log(props);
  return (
    <div>Username is : {username}
    <br/>
    Age is : {age}
    </div>
  )
}

export default User