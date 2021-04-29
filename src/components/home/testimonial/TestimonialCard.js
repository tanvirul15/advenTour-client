import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import "./Testimonial.css";
const TestimonialCard = ({ item }) => {
  return (
    <div className='col-md-4 mb-4'>
      <div className='card h-100'>
        <div className='card-body review-box'>
          <p className='mt-3'>{item.title}</p>
          <small className='d-block mb-3'>{item.review}</small>

          <div className='d-flex px-2 justify-content-between'>
            <PersonIcon style={{ fontSize: 40, color: "#5FB985" }} />
            <h6>{item.displayName}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
