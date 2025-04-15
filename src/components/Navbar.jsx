import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <header>
    <h2>FAKEsTORE</h2>
    <nav>
        
        <Link to="/">Home</Link>
        <Link to="/contact">Contacts</Link>
        <Link to="/catalogo">Catalogo</Link>
        
    </nav>
   </header>
  )
}

export default Navbar