import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink  to='/' className={({isActive})=>(isActive ? 'link active' : 'link')}>Home</NavLink >
    <NavLink  to='About'className={({isActive})=>(isActive ? 'link active' :'link')}>About</NavLink > 
    <NavLink  to='Product' className={({isActive})=>(isActive ? 'link active' :'link')}>Products</NavLink >
    <NavLink  to='login' className={({isActive})=>(isActive ? 'link active' :'link')}>Login</NavLink >
    </nav>
  )
}

export default Navbar
