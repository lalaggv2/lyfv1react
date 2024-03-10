import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
import Newsletter from '../Components/Newsletter/Newsletter'

//Homepage de la aplicacion que renderiza diferentes componentes
const Inicio = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <NewCollections />
      <Newsletter />
    </div>
  )
}

export default Inicio