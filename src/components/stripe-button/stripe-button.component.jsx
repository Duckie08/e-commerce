import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JIUOwHj93pmYgbEEvCmvckSoDMSPO7vceflldMrl2aOFm5xctSYUadnmnl2HaeE9NoK2OFtNadCUyOohgU8J0X400MGIze6HJ';

    const onToken = token => {
        console.log(token);
        alert("suceess")
    }
    return (
        <StripeCheckout
            label='Pay now'
            name='CRWN Clowthing Ltd'
            billingAddress
            shippingAddress
            image=''
            amount={priceForStripe}
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
