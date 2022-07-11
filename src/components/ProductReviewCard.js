import React from 'react'
import "../styles/ProductReviewCard.css"

const ProductReviewCard = ({image,index,name,review,price,link}) => {
  return (
    <div className="ProductReviewCard">
      <a className="ProductReviewCardA" href={link}>
      <img src={image} alt={`${index} review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
      </a>
        
    </div>
  )
}

export default ProductReviewCard