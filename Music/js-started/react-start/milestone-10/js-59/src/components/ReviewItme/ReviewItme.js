
import React from 'react';
import './ReviewItem.css'


const ReviewItme = (props) => {
    const{name,price,shipping,quantity,img} = props.product;
    const {handleRemoveProduct,product} = props;
    return (
        <div className='review-item'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className="review-item-details-contianer">
     <div className="review-item-details">
         <p className="product-name" title={name}>{name.length > 20? name.slice(0,20) + '...' :name}</p>
         <p>price: $<span className='orange-color'>{price}</span></p>
         <p><small>shipping: {shipping}</small></p>
         <p><small>quantity: {quantity}</small></p>
     </div>
     <div className="delete-contianer">
         <button onClick={()=>handleRemoveProduct(product)} className='font-btn'>
                  X
             </button> 
     </div>
        </div>
        </div>
    );
};

export default ReviewItme;