import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  // ----------------handleadd coffe------------------
  const handleCoffeeAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());
    console.log(newData);

    // console.log('hello add')
    // --------------post data coffee--------------
    fetch(
      "https://coffee-store-server-ce8t4z2kr-st7691s-projects.vercel.app/coffees",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newData),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding coffee", data);

        Swal.fire({
          position: "top",
          icon: "success",
          title: "Add Coffee successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="p-24 bg-[#F4F3F0]">
      <div className="p-12 text-center space-y-10">
        <h1 className="text-6xl text-[#374151] text-blod">Add New Coffee</h1>
        <p className="text-[#1B1A1A]">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form action="" onSubmit={handleCoffeeAdd}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ---------name----------- */}
          <fieldset className="fieldset rounded-box  p-4">
            <label className="fieldset-legend text-black">Name</label>
            <input
              type="text"
              className="input w-full bg-[#FFFFFF] text-[#1B1A1A]"
              placeholder="Coffee Name"
              name="name"
            />
          </fieldset>
          {/* -------quantity----------- */}
          <fieldset className="fieldset rounded-box  p-4">
            <label className="fieldset-legend text-black">Quantity</label>
            <input
              type="text"
              className="input bg-[#FFFFFF] text-[#1B1A1A] w-full"
              placeholder="Coffee quantity"
              name="quantity"
            />
          </fieldset>
          {/*-------------Supplier--------------- */}
          <fieldset className="fieldset rounded-box  p-4">
            <label className="fieldset-legend text-black">Supplier</label>
            <input
              type="text"
              className="input bg-[#FFFFFF] text-[#1B1A1A] w-full"
              placeholder="Coffee Name"
              name="Supplier"
            />
          </fieldset>
          {/* --------------Taste-------------- */}
          <fieldset className="fieldset rounded-box  p-4">
            <label className="fieldset-legend text-black">Taste</label>
            <input
              type="text"
              className="input bg-[#FFFFFF] text-[#1B1A1A] w-full"
              placeholder="Coffee Taste"
              name="Taste"
            />
          </fieldset>
          {/* -----------Price--------------- */}
          <fieldset className="fieldset rounded-box  p-4">
            <label className="fieldset-legend text-black">Price</label>
            <input
              type="text"
              className="input bg-[#FFFFFF] text-[#1B1A1A]  w-full"
              placeholder="Coffee Price"
              name="Price"
            />
          </fieldset>
          {/* ----------------Details------------------ */}
          <fieldset className="fieldset rounded-box  p-4">
            <label className="fieldset-legend text-black">Details</label>
            <input
              type="text"
              className="input bg-[#FFFFFF] text-[#1B1A1A] w-full"
              placeholder="Coffee Details"
              name="Details"
            />
          </fieldset>
        </div>
        {/* ---------Photo-------------------- */}
        <fieldset className="fieldset rounded-box my-6  p-4">
          <label className="fieldset-legend text-black">Photo</label>
          <input
            type="text"
            className="input bg-[#FFFFFF] text-[#1B1A1A] w-full"
            placeholder="Coffee Photo URL"
            name="Photo"
          />
        </fieldset>
        {/* -------------button---------------- */}
        <input
          type="submit"
          value="Add Coffee"
          className="btn w-full bg-[#331A15] text-white"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
// ------------------image link --------------------------
// https://i.ibb.co.com/DfrQcvPD/2.png
// https://i.ibb.co.com/6JN5kHVz/1.png
// https://i.ibb.co.com/Pzw9sdM3/6.png
// https://i.ibb.co.com/YFj4BDkb/3.png
// https://i.ibb.co.com/8Snb7Bh/4.png
// https://i.ibb.co.com/TSgX24P/5.png
