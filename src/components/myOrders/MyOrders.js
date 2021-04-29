import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Footer from "../home/footer/Footer";
import Navbar from "../navbar/Navbar";

const MyOrders = () => {
  const [packages, setPackages] = useState([]);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://warm-reef-21791.herokuapp.com/getOrders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <h2 className='display-5 py-5 text-center'>YOUR PACKAGES</h2>
      <div className='container'>
        <div className='bg-light p-2 m-3'>
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Package ID</th>
                <th scope='col'>Package Name</th>
                <th scope='col'>Price</th>
                <th scope='col'>Location</th>
                <th scope='col'>Booking Date</th>
                <th scope='col'>Payment ID</th>
              </tr>
            </thead>
            <tbody>
              {packages.length > 0 ? (
                ""
              ) : (
                <div className='text-center'>
                  <CircularProgress />
                </div>
              )}
              {packages.map((order) => (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.packageName}</td>
                  <td>{order.packagePrice}</td>
                  <td>{order.packageLocation}</td>
                  <td>{new Date(order.JourneyDate).toDateString()}</td>
                  <td>{order.paymentID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyOrders;
