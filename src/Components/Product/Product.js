import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const { picture, age, name, about } = props.product
    return (
        <div>
            <h1>asdf</h1>
            <p> age {age}</p>
            <img src={picture} alt="" />
        </div>
    );
};

export default Product;