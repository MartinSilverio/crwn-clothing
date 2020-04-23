import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_9wZsVvytWitcXC1kC7DnABP000PJEeq8Su';

  function onToken(token) {
    console.log(token);
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='SLVR Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
