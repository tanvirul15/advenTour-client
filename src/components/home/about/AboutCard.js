import React from "react";

const AboutCard = (props) => {
  return (
    <div className='col-md-3 '>
      <div className='card bg-light about__card'>
        <div className='card-body text-center'>
          {props.children}
          <p className='lead'>{props.item.title}</p>
          <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sed consequatur possimus ratione.</small>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
