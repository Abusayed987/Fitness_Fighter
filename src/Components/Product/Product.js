import React from 'react';
import './Product.css'
const Product = ({ handleAddToList, product }) => {
    // const { handleAddToList, product } = props;
    const { picture, age, name, about, time } = product;
    // console.log(props);
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p className='text-color'>{about.substring(0, 80)}...</p>
            <p>For Age :<b>{age}</b> </p>
            <p>Time required :<b>{time}s</b> </p>
            <button onClick={() => handleAddToList(product)}>Add to list</button>
        </div>
    );
};

export default Product;