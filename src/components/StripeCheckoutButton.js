import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ total }) => {
  const priceForStripe = total * 100;
  const publishableKey = "pk_test_vTmyvx8vCx55WgxCESH2XxNT00sDUn7Fs3";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Shoppers Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${total}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
