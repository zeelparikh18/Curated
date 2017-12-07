import React from 'react';
import {Link} from 'react-router-dom';

import CartItem from './CartItem';

import {getSelectedItems} from './utils/index';

class Cart extends React.Component {

    state = {
      items: []
    };

    componentWillMount() {
        this.setup(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.cart !== this.props.cart || nextProps.listings !== this.props.listings) {
            this.setup(nextProps);
        }
    }

    setup = ({cart, listings}) => {
        const items = getSelectedItems(cart, listings);
        this.setState({ items });
    };

    onItemRemove = ({currentTarget:{dataset:{id}}}) => this.props.onItemRemove(+id);

    renderCartItem = (cartItem, i) => <CartItem key={`cartItem-${i}`} {...cartItem} onRemove={this.onItemRemove} />;

    render(){
        return (
            <div className="cart-container">
                <div className="cart-list">
                    {this.state.items.map(this.renderCartItem)}
                </div>
                <div className="cart-buttons">
                    <div className="button">
                        <Link to="/" >
                            BACK TO SHOPPING
                        </Link>
                    </div>
                    <div className="button">
                        <Link to="/thankyou" onClick={this.props.emptyCart}>
                            CHECKOUT
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;