import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade" >Reviews(122)</div> 
        </div>
        <div className="descriptionbox-description">
            <p>
            An ecommerce business uses digital methods to sell products and services to customers. 
            Ecommerce businesses can be online-only or have a physical presence as well. 
            Selling to customers online typically requires a website or digital storefront
            , plus a way to process payments digitally and ship orders to customers.
            </p>
            <p>
            Having an online store enables Businesses to increase profitability with less risk and expenses
            , E-commerce is digital and allows to store the products 
            directly into a warehouse with automated inventory that are immediately available after
             the order has been finalized.
            </p>
        </div>
    </div>
  )
}
