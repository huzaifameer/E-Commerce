import React, { useState } from 'react'
import "./NavBar.css"
import logo from "../Assets/logo.png"
import cartIcon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

export const NavBar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SollydZ</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration: 'none',color:'inherit'}} to= "/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}> <Link style={{textDecoration: 'none',color:'inherit'}} to="/men">Men</Link> {menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}> <Link style={{textDecoration: 'none',color:'inherit'}} to="/women">Women</Link> {menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration: 'none',color:'inherit'}} to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cartIcon} alt="cart" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
