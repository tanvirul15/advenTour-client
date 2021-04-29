import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import Footer from "../home/footer/Footer";
import Navbar from "../navbar/Navbar";
import ProcessPayment from "../processPayment/ProcessPayment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Checkout = () => {
  //placeOrder
  const [user, setUser] = useContext(UserContext);
  const [orderedPackage, setOrderedPackage] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://warm-reef-21791.herokuapp.com/getPackage?id=${id}`)
      .then((res) => res.json())
      .then((data) => setOrderedPackage(data));
  }, []);

  const confirmOrder = (paymentID) => {
    const orderObj = {
      name: user.displayName,
      email: user.email,
      JourneyDate: selectedDate,
      packagePrice: orderedPackage.cost,
      packageID: orderedPackage._id,
      packageName: orderedPackage.name,
      packageLocation: orderedPackage.location,
      paymentID,
    };

    fetch("https://warm-reef-21791.herokuapp.com/placeOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Order Placed Succesfully..! Go back to home");
          history.replace("/");
        } else {
          alert("Error Occured..!!");
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className='display-5 py-5 text-center'>Checkout</h2>
      <div className='container'>
        <div className='row pb-5'>
          <div className='col-md-4'>
            <p>{orderedPackage.name}</p>
            <p>{orderedPackage.duration}</p>
            <p className='text-success'>{orderedPackage.location}</p>

            <div className='d-flex justify-content-between align-items-end'>
              <h6 className='text-primary'>{orderedPackage.cost} BDT</h6>
            </div>
          </div>
          <div className='col-md-4'>
            <ProcessPayment confirmOrder={confirmOrder} />
          </div>
          <div className='col-md-4'>
            <Calendar onChange={setSelectedDate} value={selectedDate} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Checkout;
