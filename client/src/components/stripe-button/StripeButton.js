import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function StripeButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_9wZsVvytWitcXC1kC7DnABP000PJEeq8Su';

    function onToken(token) {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then((response) => {
                alert('Payment successful');
            })
            .catch((error) => {
                console.log('Payment error', error);
                alert(
                    'There was an issue with your payment. Please enter provided credit card'
                );
            });
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="SLVR Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeButton;
