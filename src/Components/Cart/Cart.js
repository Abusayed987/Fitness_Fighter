import React from 'react';
import './Cart.css'
import profileImg from '../../images/coding_zone.png';
const Cart = () => {
    return (
        <div className='cart-container'>
            <div className='profile'>
                <img src={profileImg} alt="profileImg" />
                <div>
                    <h3>Abu Sayed</h3>
                    <p>address</p>
                </div>
            </div>
            <div>
                <p>Weight</p>
                <p>height</p>
                <p>age</p>
            </div>
            <h3>Add A Break </h3>
            <div>
                <p>Time s</p>
                <p>Time s</p>
                <p>Time s</p>
                <p>Time s</p>
                <p>Time s</p>
            </div>
            <h3>Exercise Details</h3>
            <div>
                <h3>Exercise time</h3>
                <p> 200 seconds</p>
            </div>
            <div>
                <h3>Break time </h3>
                <p>15 seconds</p>
            </div>
            <button>Activity Completed</button>
        </div>
    );
};

export default Cart;