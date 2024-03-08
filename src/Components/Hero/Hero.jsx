import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image2 from '../Assets/hero_image2.jpg'

//este componente representa la imagen y texto central de la homepage
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Bienvenido a L y F Confecciones</h2>
            <div>
                <div className="hero-hand-icon"> 
                    <img src={hand_icon} alt="" />
                </div>
                <p>Nos dedicamos a producir jeans y uniformes. </p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest collection</div>
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