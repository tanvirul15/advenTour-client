import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PackagesCard from "./PackagesCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const FeaturedPackage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://warm-reef-21791.herokuapp.com/getFeaturedPackages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [packages]);

  return (
    <div className='py-5'>
      <h2 className='display-6 text-center mb-4'>Our Packages</h2>
      <div className='container'>
        <div className='row'>
          {packages.length > 0 ? (
            ""
          ) : (
            <div className='text-center'>
              <CircularProgress />
            </div>
          )}
          {packages.map((item) => (
            <PackagesCard item={item} key={item._id} />
          ))}
        </div>
        <div className='text-center py-4'>
          <Link to='packages' className='btn btn-success'>
            See All Package
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPackage;
