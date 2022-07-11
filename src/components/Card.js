import React from 'react'

const Card = ({user}) => {
  return (
    <div className="card">
        <img src={user.avatar_url} alt="Sample Img" />
        <div>
          <h5>User ID : {user.node_id.slice(0, user.node_id.length - 2)}</h5>
          <br />
          <h4>User Name : {user.login}</h4> 
        </div>
    </div>
  )
}

export default Card