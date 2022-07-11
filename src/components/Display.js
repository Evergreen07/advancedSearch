import React from 'react'
import Card from './Card'

const Display = ({ users }) => {
  return (
    <div className="display">
        {users && users.map((user) => (
            <Card key={user.node_id} user={user}/>
        ))}
    </div>
  )
}

export default Display