import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import Footer from "../home/footer/Footer";
import Navbar from "../navbar/Navbar";

const ReviewForm = () => {
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  const handleSubmitReview = () => {
    const title = document.getElementById("title").value;
    const review = document.getElementById("review").value;
    const reviewObj = {
      displayName: user.displayName,
      email: user.email,
      title,
      review,
    };
    fetch("https://warm-reef-21791.herokuapp.com/submitReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.alert("Review Submitted");
          history.push("/");
        } else {
          window.alert("Error Occure. Check your internet connection and try again..");
        }
      });
  };
  return (
    <div>
      <Navbar />
      <div className='container py-5'>
        <div className='mx-auto w-75  text-center p-5'>
          <div>
            <h1 className='display-6 mb-4'>WE'RE HAPPY TO HEAR FROM YOU</h1>

            <div className='mb-3'>
              <input type='text' id='title' className='form-control' placeholder='Title' />
            </div>
            <div className='mb-3'>
              <textarea className='form-control' placeholder='Review' id='review' rows='5'></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleSubmitReview}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewForm;
