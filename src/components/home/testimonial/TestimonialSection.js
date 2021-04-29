import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("https://warm-reef-21791.herokuapp.com/getFeaturedTestimonials")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, [testimonial]);

  return (
    <div className='py-5 bg-light'>
      <h2 className='display-6 text-center mb-4'>OUR CUSTOMERS CAN'T LIVE WITHOUT US</h2>
      <div className='container'>
        <div className='row'>
          {testimonial.length > 0 ? (
            ""
          ) : (
            <div className='text-center'>
              <CircularProgress />
            </div>
          )}
          {testimonial.map((item) => (
            <TestimonialCard item={item} key={item._id} />
          ))}
        </div>
      </div>
      <div className='text-center py-4'>
        <Link to='reviews' className='btn btn-success'>
          See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default TestimonialSection;
