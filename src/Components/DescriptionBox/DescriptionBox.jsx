import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Descripcion</div>
            <div className="descriptionbox-nav-box fade">Opiniones (17)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Una aplicacion es ...</p>
        </div>
    </div>
  )
}

export default DescriptionBox