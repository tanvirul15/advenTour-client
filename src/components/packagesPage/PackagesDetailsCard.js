import React from "react";
import { Link } from "react-router-dom";

// "_id": "607d44990bcd9504c639213d",
// "name": "Sundarbans Safari",
// "duration": "8 days",
// "location": "Sundarbans, Mongla",
// "cost": "20000",
// "img": "https://media-eng.dhakatribune.com/uploads/2020/09/9-new-project-1599296482873.jpg",
// "availability": "Available",
// "included": "Dhaka – Khula - Dhaka Non AC Bus ticket,  Cruise inside the Forest.,  Accommodation on our cruiser on twin sharing basis,  All meals from day-1 to day-3.,  All activities inside the forest as per itinerary.,  Small country boat to make trips inside small canals/creeks.,  Mineral water for drinking during the trip.,  Dinner on the last night.,  Forest fees, permission.,  Armed forest guard from the forest department,  An accompanied Guide during the trip."

const PackagesDetailsCard = ({ item }) => {
  return (
    <div className='col-md-6 mb-4'>
      <div className='card h-100'>
        <img style={{ height: "300px" }} src={item.img} alt='' className='card-img-top' />
        <div className='card-body'>
          <p>{item.name}</p>
          <p>{item.duration}</p>
          <p className='text-success'>{item.location}</p>
          <p className='text-muted'>{item.included}</p>
          <div className='d-flex justify-content-between align-items-end'>
            <h6 className='text-primary'>{item.cost} BDT</h6>
            <Link to={`/checkout/${item._id}`} className='btn btn-warning'>
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesDetailsCard;
