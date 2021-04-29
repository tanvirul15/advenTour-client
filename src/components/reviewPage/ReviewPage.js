import React, { useEffect, useState } from "react";
import Footer from "../home/footer/Footer";
import Navbar from "../navbar/Navbar";
import TestimonialCard from "../home/testimonial/TestimonialCard";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const ReviewPage = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://warm-reef-21791.herokuapp.com/getTestimonials")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [review]);
  return (
    <div>
      <Navbar></Navbar>
      <h2 className='display-5 py-5 text-center'>WHAT CUSTOMERS THINK ABOUT US</h2>
      <div className='container'>
        <div className='row'>
          {review.length > 0 ? (
            ""
          ) : (
            <div className='text-center'>
              <CircularProgress />
            </div>
          )}
          {review.map((item) => (
            <TestimonialCard item={item} key={item._id} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ReviewPage;
