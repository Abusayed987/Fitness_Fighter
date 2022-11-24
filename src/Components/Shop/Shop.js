import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-component'>
            <div className='product-component'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <h2>FitNess Pro</h2>
                </div>
                <div>
                    <h3 className='text'>Select today's Exercise!</h3>
                </div>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className='cart-component'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;    