import React from "react";

const AddPackage = () => {
  const clearFields = () => {
    document.getElementById("nameInput").value = "";
    document.getElementById("durationInp").value = "";
    document.getElementById("locationInp").value = "";
    document.getElementById("priceInput").value = "";
    document.getElementById("imageInput").value = "";
    document.getElementById("descriptionInput").value = "";
  };

  const handleAddPackage = () => {
    const name = document.getElementById("nameInput").value;
    const duration = document.getElementById("durationInp").value;
    const location = document.getElementById("locationInp").value;
    const cost = document.getElementById("priceInput").value;
    const img = document.getElementById("imageInput").value;
    const included = document.getElementById("descriptionInput").value;
    if (name == "" || duration == "" || location == "" || cost == "" || img == "" || included == "") {
      window.alert("All Field Required");
    } else {
      const packageObject = { name, duration, location, cost, img, availability: "available", included };
      fetch("https://warm-reef-21791.herokuapp.com/submitPackage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(packageObject),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            window.alert("Review Submitted");
            clearFields();
          } else {
            window.alert("Error Occure. Check your internet connection and try again..");
          }
        });
    }
  };

  return (
    <div>
      <h4 className='p-3 text-center display-6'>Add Product</h4>

      <div className='bg-light p-5 m-3'>
        <input id='nameInput' className='form-control mb-3 me-3' type='text' placeholder='Package Name' />
        {/* <div className='d-flex'> */}
        <input id='locationInp' className='form-control mb-3 me-3' type='text' placeholder='Location' />
        <input id='durationInp' className='form-control mb-3' type='text' placeholder='Package Duration' />
        {/* </div> */}
        {/* <div className='d-flex'> */}
        <input id='imageInput' className='form-control mb-3 me-3' type='text' placeholder='Image URL (Ex: https://i.ibb.co/n7Ky0hV/image-40.png)' />
        <input id='priceInput' className='form-control mb-3' type='text' placeholder='Price' />
        {/* </div> */}
        <textarea id='descriptionInput' className='form-control mb-3' rows='5' placeholder='Description ' />
        <button className='btn btn-success' onClick={handleAddPackage}>
          Add Package
        </button>
      </div>
    </div>
  );
};

export default AddPackage;
