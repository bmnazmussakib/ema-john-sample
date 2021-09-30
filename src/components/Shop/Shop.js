import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
// import fakeData from '../../fakeData';

// import {data} from '../../fakeData/products.JSON'


const Shop = () => {

    const [products, setProducts] = useState([]);
    const getData=()=>{
        fetch('fakeData/products.JSON')
        .then(response => response.json())
            .then(data => {
                const first10 = data.slice(0, 10);
                setProducts(first10);
        })
      }
      useEffect(()=>{
        getData()
      }, [])
    
    const [cart, setCart] = useState([])
    
    const handleAddProduct = (product) => {
        // console.log("Product added", product);
        let newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart);
    }
    
    return (
        <div className="shop-container">

            <div className="products-container">
                    {
                        products.map(pd => <Product handleAddProduct={handleAddProduct} products={pd}></Product>)
                    }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;