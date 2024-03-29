import React, { useState } from 'react'
import './Navbar.css';
import logo from  '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

//Barra de navegacion de la aplicacion
const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>L Y F CONFECCIONES</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("inicio")}}><Link style={{ textDecoration: 'none' }} to='/'>Inicio</Link>{menu==="inicio"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("personal")}}><Link style={{ textDecoration: 'none' }} to='/personal'>Personal</Link>{menu==="personal"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("inventario")}}><Link style={{ textDecoration: 'none' }} to='/inventario'>Inventario</Link>{menu==="inventario"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("catalogo")}}><Link style={{ textDecoration: 'none' }} to='/catalogo'>Catalogo</Link>{menu==="clientes"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contactenos")}}><Link style={{ textDecoration: 'none' }} to='/contactenos'>Contactenos</Link>{menu==="contactenos"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="carrito de compras" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar