import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// components
import Header from './Header';
import Footer from './Footer';
import Listings from './ListingsContainer';
import CartPage from './Cart';
import ThankYou from './ThankYou';

// utils
import {
    httpGetAsync,
    normalizeListingsData,
    getNumOfItemsSelected,
    getSelectedItems
} from './utils/index';

// styles
import './styles/main.scss';

// constants
const MOCK_API = "http://www.mocky.io/v2/5a2978462e00005731a09ca0";

export default class App extends React.Component {

    state = {
        'isFetching': true,
        'listings': [],
        'cart': {}
    };

    componentWillMount() {
        httpGetAsync(MOCK_API, ({data}) => {
            this.setState({
                isFetching: false,
                listings: normalizeListingsData(data)
            });
        });
    }

    addToCart = item => {
        const cart = this.state.cart;
        this.setState({
           'cart': Object.assign({}, cart,  {
               [item]: cart[item] ? cart[item] + 1 : 1
           })
        });
    };

    removeFromCart = id => {
        const newCart = Object.assign({}, this.state.cart);
        delete newCart[id];
        this.setState({cart: newCart});

    };

    emptyCart = () => {
      this.setState({cart: {}});
    };

    render() {
        return (
            <Router>
                <div className="appContainer">
                    <Header selected={getNumOfItemsSelected(this.state.cart)} />
                    <div className="app--body">
                        <Switch>
                            <Route exact path="/" component={() => <Listings {...this.state} addToCart={this.addToCart} />} />
                            <Route path="/cart" component={() => <CartPage {...this.state} onItemRemove={this.removeFromCart} emptyCart={this.emptyCart} />} />
                            <Route path="/thankyou" component={ThankYou} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}