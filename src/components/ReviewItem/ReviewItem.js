import React from 'react';

const ReviewItem = (props) => {
    // console.log("props=====",props);
    const reviewItemStyle = {
        margin: "0 200px",
        borderBottom: "1px solid lightgrey",
        paddingBottom: "20px"
    }
    const { name, quantity, key, price } = props.product;
    return (
        <div style={reviewItemStyle}>
            <h4 className="product-name">{name}</h4>
            <h4>Quantity: {quantity}</h4>
            <p>Unit Price: $ { price }</p>
            <br />
            <button className="add-to-cart" onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;