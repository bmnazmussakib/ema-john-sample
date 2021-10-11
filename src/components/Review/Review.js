import './Review.css';
import React, { useEffect, useState } from 'react';
import { clearTheCart, getDb } from '../../utilities/fakedb';
import { removeFromDb } from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import happy from '../../images/giphy.gif';




const Review = () => {

    // Set Cart
    const [cart, setCart] = useState([]);


    // Set Placing order
    const [orderPlaced, setOrderPlaced] = useState(false);


    // Remove Item from Database & Cart Function
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDb(productKey);
        // console.log("Remove Clicked", productKey);
    }


    // Getting Data from from DB and set them to Cart
    useEffect(() => {
        //CART
        const saveCart = JSON.parse(getDb());

        const productKeys = Object.keys(saveCart);


        const cartProduct = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey];     //এই লাইনটি বুঝিনি   
            return product;
        })
        setCart(cartProduct);

    }, [])

    // Click handler for Placing order button
    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        setOrderPlaced(true);
    }

    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={happy} alt="" />
    }

    return (
        <div className="twin-container">
            <div className="review-products-container">
                {
                    cart.map(pd => <ReviewItem product={pd} removeProduct={removeProduct}></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button onClick={handlePlaceOrder} className="add-to-cart"><FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />Place Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;