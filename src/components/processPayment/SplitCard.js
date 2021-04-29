import React, { useMemo, useState } from "react";
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );
  return options;
};

const SplitCard = ({ confirmOrder }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [paymentInfo, setPaymentInfo] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    setPaymentInfo(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement options={options} />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement options={options} />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement options={options} />
      </label>

      <br />
      <br />
      {paymentInfo.paymentMethod?.id ? (
        <button className='btn btn-success' onClick={() => confirmOrder(paymentInfo.paymentMethod.id)}>
          Confirm Order
        </button>
      ) : (
        <button type='submit' disabled={!stripe}>
          Pay
        </button>
      )}
      {paymentInfo.paymentMethod?.id && <label className='text-success d-block'>Payment Success..!</label>}
      {paymentInfo.error && <label className='text-danger d-block'>{"Payment Failed..!  " + paymentInfo.error.message}</label>}
    </form>
  );
};

export default SplitCard;
