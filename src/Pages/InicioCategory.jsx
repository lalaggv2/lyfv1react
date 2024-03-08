import React, { useContext } from 'react'
import './CSS/InicioCategory.css'
import { InicioContext } from '../Context/InicioContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const InicioCategory = (props) => {
  const {all_product} = useContext(InicioContext);
  return (
    <div className='inicio-category'>
        <img className='iniciocategory-banner' src={props.banner} alt="" />
        <div className="iniciocategory-indexSort">
          <p>
            <span>Bienvenido a la pagina de </span>
            PERSONAL
          </p>
          <div className="iniciocategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="iniciocategory-products">
          {all_product.map((item, i)=>{
            if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else {
              return null
            }
          })}
        </div>
        <div className="iniciocategory-loadmore">
          Explore mas opciones
        </div>
    </div>
  )
}

export default InicioCategory