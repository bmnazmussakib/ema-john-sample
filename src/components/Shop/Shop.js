import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDb, getDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// import fakeData from '../../fakeData';
// import {data} from '../../fakeData/products.JSON';


const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);


    // useEffect(() => {
        // const saveCart = JSON.parse(getDb());
        // const saveCart = getDb();
        // console.log(saveCart);
        // const productKeys = Object.keys(saveCart);

        // const cartProduct = productKeys.map(existingKey => {
        //     const product = fakeData.find(pd => pd.key === existingKey);
        //     product.quantity = saveCart[existingKey];
        //     return product;
        // })
        // setCart(cartProduct);

    // });




    const handleAddProduct = (product) => {
        // console.log(product);
        const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAdded);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            let others = cart.filter(pd => pd.key === toBeAdded);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDb(product.key);
    }

    return (
        <div className="product-container">

            <div className="products-container">
                {
                    products.map(pd => <Product showAddCart={true} handleAddProduct={handleAddProduct} products={pd} key={products.key}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="add-to-cart"><FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />Product Review</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;