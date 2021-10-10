import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import data from '../../fakeData';
import Product from '../Product/Product';



const ProductDetails = () => {

    const { productKey } = useParams();
    
    const product = data.find(pd => pd.key === productKey);

    console.log(product);

    return (
        <div>
            <Product showAddCart={false} products={product}></Product>
        </div>
    );
};

export default ProductDetails;