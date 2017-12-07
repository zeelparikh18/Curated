import React from 'react';
import {Link} from 'react-router-dom';

import DONE from './assets/check.svg'

const ThankYou = () => (
    <div className="thankYouContainer">
        <div className="thankYou">
            <div className="thankYou--icon">
                <img src={DONE} />
            </div>
            <div className="thankYou--title">
                Thank You for shopping with us
            </div>
            <div className="thankYou--desc">
                Your order has been placed successfully
            </div>
            <div className="thankYou--button">
                <Link to="/" >Continue Shopping</Link>
            </div>
        </div>
    </div>
);

export default ThankYou;
