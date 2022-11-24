import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const { picture, age, name, about, time } = props.product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p className='text-color'>{about.substring(0, 80)}...</p>
            <p>For Age :<b>{age}</b> </p>
            <p>Time required :<b>{time}s</b> </p>
            <button>Add to list</button>
        </div>
    );
};

export default Product;