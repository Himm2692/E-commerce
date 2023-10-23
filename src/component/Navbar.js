import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'

const Navbar = () => {
  const cart= useSelector((state)=> state.cart)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/">E-Commerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addCart"><i className="fa-solid fa-cart-shopping"></i> Cart({cart.length})</Link>
        </li>
        <Link className="btn btn-primary mx-2 navbar-login" to="/login" role="button">Login</Link>
        <Link className="btn btn-primary mx-2 navbar-signup" to="/signup" role="button">Sign up</Link>
       </ul>
         
    </div>
  </div>
</nav>
  )
}

export default Navbar