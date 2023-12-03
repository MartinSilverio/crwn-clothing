import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton';

import { createStructuredSelector } from 'reselect';
import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cartSelectors';

import './CheckoutPage.scss';

function CheckoutPage({ cartItems, total }) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                *The mock payment process does not currently work*
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    );
}

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStatetoProps)(CheckoutPage);
