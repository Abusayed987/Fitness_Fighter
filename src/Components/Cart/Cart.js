import React, { useEffect, useState } from 'react';
import './Cart.css'
import profileImg from '../../images/coding_zone.png';
const Cart = () => {
    let [timeOne, timeTwo, timeThree, timeFour] = [10, 20, 30, 40];
    const [time, setTime] = useState([])
    const breakHandler = (time) => {
        setTime(time)
    }
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
                <button onClick={() => breakHandler(timeOne)}>{timeOne}s</button>
                <button onClick={() => breakHandler(timeTwo)}>{timeTwo}s</button>
                <button onClick={() => breakHandler(timeThree)}>{timeThree}s</button>
                <button onClick={() => breakHandler(timeFour)}>{timeFour}s</button>
            </div>
            <h3 className='title-name' style={{ color: '#212432' }}>Exercise Details</h3>
            <div className='exercise-details'>
                <h4>Exercise time</h4>
                <p> 200 seconds</p>
            </div>
            <div className='break-time-details'>
                <h4>Break time </h4>
                <p><b>{time}</b> <span className='text-color'>seconds</span></p>
            </div>
            <button className='cart-btn'>Activity Completed</button>
        </div>
    );
};

export default Cart;