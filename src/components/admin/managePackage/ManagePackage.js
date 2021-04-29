import React, { useEffect, useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { CircularProgress } from "@material-ui/core";

const ManagePackage = () => {
  const [packages, setPackages] = useState([]);

  const deleteItem = (id) => {
    const getConfirmation = window.confirm("Are you sure to delete the product?");
    if (getConfirmation) {
      fetch("https://warm-reef-21791.herokuapp.com/deleteProduct?id=" + id)
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            window.alert("Succesfully Deleted..");
            let tempPackages = [...packages];
            tempPackages = tempPackages.filter((item) => item._id !== id);
            setPackages(tempPackages);
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://warm-reef-21791.herokuapp.com/getPackages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <h2 className='display-5 py-5 text-center'>All Package</h2>
      <div className='container'>
        <div className='bg-light p-2 m-3'>
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Package ID</th>
                <th scope='col'>Package Name</th>
                <th scope='col'>Duration</th>
                <th scope='col'>Location</th>
                <th scope='col'>Price</th>
                <th scope='col'>Availability</th>
                <th scope='col'>Delete</th>
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
              {packages.map((item) => (
                <tr>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.duration}</td>
                  <td>{item.location}</td>
                  <td>{item.cost}</td>
                  <td>{item.availability}</td>
                  <td>
                    <span id='deleteItem' style={{ cursor: "pointer" }}>
                      <HighlightOffIcon color='secondary' onClick={() => deleteItem(item._id)} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePackage;
