import React from "react";
import greenImg from "../../../img/header-bg.PNG";
import "./Features.css";

const Features = () => {
  return (
    <div className='py-5'>
      <h2 className='text-center display-6'>EXCITING TOURS FOR ADVENTURAS PEOPLE.</h2>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h6 className='mb-2'>YOU'RE GOING TO FALL IN LOVE WITH NATURE</h6>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vel explicabo sint iusto quas corrupti? Quibusdam natus voluptatum commodi architecto ea fugiat ab! Obcaecati doloremque a totam ut debitis exercitationem.</small>
            <h6 className='mb-2 mt-3'>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h6>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vel explicabo sint iusto quas corrupti? Quibusdam natus voluptatum commodi architecto ea fugiat ab! Obcaecati doloremque a totam ut debitis exercitationem.</small>
          </div>

          <div className='col-md-6 text-center'>
            <img className='img-fluid features__img' src={greenImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
