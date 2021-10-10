import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { getDb } from '../../utilities/fakedb';
import data from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';




const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCart = getDb();
        const productKeys = Object.keys(JSON.parse(saveCart));
    // const productKeys = Object.keys(saveCart);

    // console.log(typeof(saveCart),",","saveCart: ",saveCart)
    // console.log(productKeys);

    const cartProducts = productKeys.map(key => {
        const product = data.filter(pd => pd.key === key);
        product.quantity = saveCart[key];
        return (product);
    });

        setCart(cartProducts)

    }, [])
    
    console.log(cart);
   


    return (
        <div>
            <h1>Totla Item: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;