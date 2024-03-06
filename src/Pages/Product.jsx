import React, { useContext} from 'react'
import { InicioContext } from '../Context/InicioContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrumb/Breadcrumb';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(InicioContext);
  const [productId] = useParams();
  const product = all_product.find((e)=> e.id === productId)
  return (
    <div>
        <Breadcrumb product={product}/>
        <ProductDisplay product=/>
    </div>
  )
}

export default Product