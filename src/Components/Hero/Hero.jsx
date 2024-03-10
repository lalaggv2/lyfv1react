import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image2 from '../Assets/hero_image2.jpg'

//este componente representa la imagen y texto central de la homepage Inicio
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1>Bienvenido a LyF Confecciones</h1>
            <div>
                <p>Nos dedicamos a producir jeans y uniformes. </p>
            </div>
            <div className="hero-latest-btn">
                <div>Ingresar</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        
        <div className="hero-right">
            <img src={hero_image2} alt="" />

        </div>
    
    </div>
  )
}

export default Hero