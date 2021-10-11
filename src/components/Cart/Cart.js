import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getStoredCart } from '../../utilities/fakedb';


const Cart = (props) => {
    const cart = props.cart;

    // console.log(props.cart[0].quantity);
    // Subtotal using reduce method
    // let totalPrice = cart.reduce(function (total, cart) {
    //     return total + cart.price;
    // }, 0)
    
    // Subtotal using for loop
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        subtotal = (subtotal + product.price) * product.quantity;
    }

    // Shipping Cost
    let shippingCost = 0;
    if (subtotal > 50 || subtotal === 0) {
        shippingCost = 0;
    }
    else if (subtotal > 15 && subtotal < 30) {
        shippingCost = 2.99;
    }
    else if (subtotal < 14) {
        shippingCost = 4.99;
    }


    // Tax Cost
    let tax = subtotal / 10;


    // Grand Total
    let grandTotal = subtotal + shippingCost + tax;

    // Number Format
    function formatNumber(num) {
        return num.toFixed(2);
    }

    return (
        <div>
            <h2>Order Summery</h2>
            <p>Item Ordered: {cart.length}</p>
            <p>Sub Total: $ {formatNumber(subtotal)}</p>
            <p><small>Shipping Cost: {shippingCost}</small></p>
            <p><small>Tax + Vat: {formatNumber(tax)}</small></p>
            <h3>Grand Total = {formatNumber(grandTotal)}</h3>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;