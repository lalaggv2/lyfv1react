import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Subscribete a nuestros correos</h1>
        <p>para estar al tanto de las ultimas noticias</p>
        <div>
            <input type="email" placeholder='Ingresa tu correo electronico' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter