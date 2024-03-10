import React from 'react'
import Banner from '../Components/Banner/Banner'

//pagina que va a mostrar los datos a los que tienen acceso los empleados. En construccion
const Personal = () => {
  return (
    <div>
        <Banner/>
        <div className='inicio-category'>
        <img className='iniciocategory-banner' alt="" />
        <div className="iniciocategory-indexSort">
          <p>
            <span>Bienvenido a la pagina de </span>
            PERSONAL
          </p>
        </div>
        </div>
    </div>
  )
}

export default Personal