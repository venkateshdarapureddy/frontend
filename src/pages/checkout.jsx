import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import {useStripe, useElements,} from '@stripe/react-stripe-js';


import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import useStore from "../store/products";

const stripePromise = loadStripe("pk_test_51QbgsSGlaeYU6ql5t9BJqIFzDwaQ8aqgKCXqJy0rkptt5AddPOzav163TY1oRYYkmFQ4PluBO5g9qI3yJL53LFY300GqPcRqZH");

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
  
      const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: "https://frontend-lemon-eight.vercel.app/",
        },
      });
  
      if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    };
  
    
    return (
        <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button disabled={!stripe}>Submit</button>
      </form>
    )
}

const Checkout = () => {
    const {clientSecret} = useStore();
//  const location = useLocation();
 const options = {
    clientSecret: clientSecret,
 };

  return (
   <div>checkout
    {clientSecret && (
    <Elements stripe = {stripePromise} options={options}>
        <CheckoutForm />
        </Elements>
    )};
   </div>
  );
};

export default Checkout;