import React from 'react';
import './Cart.css'
import profileImg from '../../images/coding_zone.png';
const Cart = () => {
    return (
        <div className='cart-container'>
            <div className='profile'>
                <img src={profileImg} alt="profileImg" />
                <div>
                    <h3 style={{ color: '#212432' }}>Abu Sayed</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='profile-details'>
                <p>
                    <span className='profile-style'>62 </span> kg<br /> <span className='text-color'>Weight</span>
                </p>
                <p>
                    <span className='profile-style'>5.9</span> <br /> <span className='text-color'>Height</span>
                </p>
                <p>
                    <span className='profile-style'>22</span>yrs <br />  <span className='text-color'>Age</span>
                </p>
            </div>
            <h3 className='title-name' style={{ color: '#212432' }}>Add A Break </h3>
            <div className='break-details'>
                <p>10s</p>
                <p>20s</p>
                <p>30s</p>
                <p>40s</p>
                <p>50s</p>
            </div>
            <h3 className='title-name' style={{ color: '#212432' }}>Exercise Details</h3>
            <div className='exercise-details'>
                <h4>Exercise time</h4>
                <p> 200 seconds</p>
            </div>
            <div className='break-time-details'>
                <h4>Break time </h4>
                <p>15 seconds</p>
            </div>
            <button className='cart-btn'>Activity Completed</button>
        </div>
    );
};

export default Cart;