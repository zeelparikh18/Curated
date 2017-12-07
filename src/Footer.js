import React from 'react';

import PAYMENT from './assets/secure-payment.svg';
import SHIPPING from './assets/free-shipping.svg';
import SUPPORT from './assets/quality-support.svg';
import SHOP from './assets/shop-app.svg';

const BENEFITS = [
    {
        icon: PAYMENT,
        title: '100% Secure Payments',
        description: 'Moving your card details to a much more secure place'
    },
    {
        icon: SHIPPING,
        title: 'Free Shipping',
        description: 'Absolutely free shipping on all orders'
    },
    {
        icon: SUPPORT,
        title: 'Quality Support',
        description: 'Got a question? Browse our FAQs or submit your query here'
    },
    {
        icon: SHOP,
        title: 'Shop on the Go',
        description: 'Download the app and get exciting app only offers'
    },

];

const INFO = [
    {
        category: 'Policy Info',
        categoryTypes: ['Privacy Policy', 'Terms of Sale', 'Terms of Use', 'Report Abuse', 'Take down Policy']
    },
    {
        category: 'Company',
        categoryTypes: ['About Us', 'Core Values', 'Careers', 'Sitemap']
    },
    {
        category: 'All Rights Reserved',
        categoryTypes: ['Copyright © 2017 Curated.']
    },
];

const renderBenefit = ({icon, title, description}, i) => (
  <div key={`benefit-${i}`} className="benefit">
      <img src={icon} />
      <div className="benefit--title">{title}</div>
      <div className="benefit--desc">{description}</div>
  </div>
);

const renderCategory = (type, i) => <div className="info--type" key={`type-${i}`}>{type}</div>;

const renderInfo = ({category, categoryTypes}, i) => (
    <div key={`info-${i}`} className="info">
        <div className="info--title">{category}</div>
        <div className="info--types">{categoryTypes.map(renderCategory)}</div>
    </div>
);

const Footer = () => (
          <div className="footer">
            <div className="footer--benefits footer--item">
                {BENEFITS.map(renderBenefit)}
            </div>
              <div className="footer--info footer--item">
                  <div className="footer--info--category">
                      {INFO.map(renderInfo)}
                  </div>
              </div>
          </div>
        );

export default Footer;
