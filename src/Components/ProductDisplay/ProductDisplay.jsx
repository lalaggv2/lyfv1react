import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'

//componente para presentar las imagenes de los productos usando los archivos en json importado por props
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">

                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" /> 
                <img src={star_dull_icon} alt="" />
                <p>(17)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-new-price">${product.old_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Pantalones de mezclilla en diferentes disenos y estilos
            </div>
            <div className="productdisplay-right-size">
                <h1>Seleccione la talla</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>COMPRAR</button>
            <p className="productdisplay-right-category"><span>Category </span>Women , T-Shirt </p>
            <p className="productdisplay-right-category"><span>Tags:</span>Modern, Latest Collection </p>
        </div>
    </div>
  )
}

export default ProductDisplay