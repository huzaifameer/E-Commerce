import React from 'react'
import "./NavBar.css"
import logo from "../Assets/logo.png"
import cartIcon from "../Assets/cart_icon.png"

export const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SollydZ Store</p>
        </div>
        <ul className="nav-menu">
            <li>Shop <hr /></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cartIcon} alt="cart" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
