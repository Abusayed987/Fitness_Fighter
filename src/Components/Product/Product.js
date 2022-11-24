import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const { picture, age, name, about, time } = props.product
    return (
        <div>
            <div>
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <p>{about}</p>
                <p>For Age :{age}</p>
                <p>Time required : {time}s</p>
            </div>
        </div>
    );
};

export default Product;