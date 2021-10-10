import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const { name, quantity } = props.product[0];
    return (
        <div>
            <h4 className="product-name">{name}</h4>
            <h5>Quantity: {quantity}</h5>
            <br />
            <button className="add-to-cart">Remove</button>
        </div>
    );
};

export default ReviewItem;