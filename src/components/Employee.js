import React from 'react'

function Employee() {
    const employee=[
        {username: 'Minhaj', age:21},
        {username: 'Sajad', age:22},
        {username: 'Fayis', age:23},
        {username: 'Arjun', age:24}

    ]
  return (
    <div>
      {
        employee.map(item=>(
          <div>
            <h4>Username : {item.username}</h4>
            <h4>Age : {item.age}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default Employee