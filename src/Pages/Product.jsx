import React, { useContext} from 'react'
import { InicioContext } from '../Context/InicioContext'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {all_product} = useContext(InicioContext);
  const [productId] = useParams();
  const product = all_product.find((e)=> e.id === productId)
  return (
    <div>

    </div>
  )
}

export default Product