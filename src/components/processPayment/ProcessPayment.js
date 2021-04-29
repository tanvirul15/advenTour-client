import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

import SplitCard from "./SplitCard";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IfIu0BoUuaFvv5O4NaA9noHSqbM34OuE8tkZn8xMcxkT2o4ccR5bXgYxdlKQqkDF9uamGpWco5qIKDP77QXQvuW006UBJ2KtD");

const ProcessPayment = ({ confirmOrder }) => {
  return (
    <Elements stripe={stripePromise}>
      <SplitCard confirmOrder={confirmOrder} />
    </Elements>
  );
};
export default ProcessPayment;
