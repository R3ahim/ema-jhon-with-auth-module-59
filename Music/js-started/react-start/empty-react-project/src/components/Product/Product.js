import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price } = product;
    return (
        <div className='product'>

            <img src={img} alt="" />

            <div className='product-info'>
                <p className='product-name' style={{ fontSize: '25px' }}>{name}</p>
                <p style={{ fontSize: '20px' }}>price: ${price}</p>

            </div>
            <button onClick={() => handleAddToCart(product.id)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            <div>
            </div>

        </div>
    );
};

export default Product;