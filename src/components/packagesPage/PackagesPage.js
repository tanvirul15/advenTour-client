import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Footer from "../home/footer/Footer";
import Navbar from "../navbar/Navbar";
import PackagesDetailsCard from "./PackagesDetailsCard";

const PackagesPage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://warm-reef-21791.herokuapp.com/getPackages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [packages]);
  return (
    <div>
      <Navbar></Navbar>
      <h2 className='display-5 py-5 text-center'>OUR PACKAGES</h2>
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
            <PackagesDetailsCard item={item} key={item._id} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PackagesPage;
