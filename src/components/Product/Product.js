import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, price, seller, stock } = props.products;
    return (
        <div className="product">

            {/* Product Image */}
            <div className="product-img">
                <img src={img} alt="" />
            </div>

            {/* Product Details */}
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <br />
                <p><small>By: { seller }</small></p>
                <p>${price}</p>
                <p><small>Only { stock } left in stock - Order soon</small></p>
                <button className="add-to-cart" onClick={()=>props.handleAddProduct(props.products)}><FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/>Add to cart</button>
            </div>

        </div>
    );
};

export default Product;