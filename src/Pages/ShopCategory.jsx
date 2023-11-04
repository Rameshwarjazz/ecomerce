import  './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Component/Assets/dropdown_icon.png'
import React,{ useContext } from 'react';
import Items from '../Component/Items/Items'
 const ShopCategory = (props) => {
  const {all_product}= useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12 </span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
       {all_product.map( (item,i) =>{
        if(props.category !== item.category){
          return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        }else{
          return null
        }
       })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
export default ShopCategory;
