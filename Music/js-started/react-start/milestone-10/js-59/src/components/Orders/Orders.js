import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItme from '../ReviewItme/ReviewItme';



const Orders = () => {
    const [products, setProducts] = useProducts([])
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)

    }

    return (
        <div className='shop-container'>
            <div className="review-items-contianer">
                {
                    cart.map(product => <ReviewItme
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItme>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/inventrory'}>
                        <button>
                            Convetion
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;