import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-head'>
          <i className="fa-solid fa-cubes fa-2x"></i> &ensp;&ensp;
          <h1>Github Search</h1>
        </div>
        
        <div className='navbar-head'>
          <i className="fas fa-lock fa-lg"></i> &ensp;
          <h3> Login </h3>
        </div>
    </div>
  )
}

export default Navbar