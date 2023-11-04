import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import Items from '../Items/Items'
export const NewCollection = () => {
  return (
    <div className='newCollection'>
        <h1>New Colllections</h1>
        <hr />
        <div className="collection">
            {new_collection.map((item,i)=>{
                return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> 
            })}
        </div>
    </div>
  )
}
