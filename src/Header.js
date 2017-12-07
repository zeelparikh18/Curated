import React from 'react';
import { Link } from 'react-router-dom';
// components
import SearchBox from './SearchBox';

import LOGO from './assets/logo.svg';
import CART from './assets/cart.svg';

class Header extends React.Component {
    render() {
        return (
          <div className="header">
              <div className="header--title">
                  <img src={LOGO} alt="logo"/>
              </div>
              <SearchBox />
              <div className="header--cart--login">
                  <Link to="/cart">
                      <div className="header--cart">
                          <img src={CART} />
                          <div className="header--cart--selected">{this.props.selected}</div>
                      </div>
                  </Link>
                  <div className="header--login">Login</div>
              </div>
          </div>
        );
    }
}

export default Header;