import React from 'react';

import CANCEL from './assets/close.svg';

const CartItem = ({image, category, name, count, rate, id, onRemove}) => (
    <div className="cart-item">
        <div className="cart-item-image-details">
            <div className="cart-item--image">
                <img src={image}/>
            </div>
            <div className="cart-item--details">
                <div className="cart-item--category">
                    {category}
                </div>
                <div className="cart-item--title">
                    {name}
                </div>
                <div className="cart-item--desc">
                    Short Description of product written here
                </div>
            </div>
        </div>
        <div className="cart-item--quantity col">
            <div className="cart-item--category">
                Quantity
            </div>
            <div className="cart-item--category">
                {count}
            </div>
        </div>
        <div className="cart-item-price-delete col">
            <div className="cart-item--price">
                {rate}
            </div>
            <div data-id={id} className="cart-item--remove" onClick={onRemove}>
                <img src={CANCEL}/>
            </div>
        </div>
    </div>

);

export default CartItem;