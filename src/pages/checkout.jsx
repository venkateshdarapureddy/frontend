import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import {useStripe, useElements} from '@stripe/react-stripe-js';

import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import useStore from "../store/products";

const stripePromise = loadStripe("pk_test_51QbgsSGlaeYU6ql5t9BJqIFzDwaQ8aqgKCXqJy0rkptt5AddPOzav163TY1oRYYkmFQ4PluBO5g9qI3yJL53LFY300GqPcRqZH");

const CheckoutForm = () => {
    
    return (
        <form>
            <PaymentElement/>
            <button>Submit</button>
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