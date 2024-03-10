import React from 'react'
import './Banner.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-left">
            <h1>Aqui puedes revisar</h1>
            <p>tus documentos y solicitar certificados</p>

        </div>
        <div className="banner-right">
            <img src={exclusive_image} alt="" />

        </div>
    </div>

  )
}

export default Banner