import React, { useState } from 'react'
import './Navbar.css';
import logo from  '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'


const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>L Y F CONFECCIONES</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("inicio")}}>Inicio{menu==="inicio"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("personal")}}>Personal{menu==="personal"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("inventario")}}>Inventario{menu==="inventario"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("clientes")}}>Clientes{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contactenos")}}>Contactenos{menu==="shop"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="carrito de compras" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar