import React from 'react'
import "../styles/HotItemCard.css"
const HotItemCard = ({image,index,name,price,link}) => {
  return (
    
    
    <div className="HotItemCard">
      <a href={link} className="HotItemA">
      <img  src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
        </a>
    </div>
    

  )
}

export default HotItemCard