import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, Price, quantity, Supplier, Taste, Details, Photo } =
    useLoaderData();
  const handleCoffeeupdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);
    //  -----------------------------update data---------------------------------
    fetch(
      `https://coffee-store-server-ce8t4z2kr-st7691s-projects.vercel.app/coffees/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateCoffee),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          Swal.fire({
            position: "top",
            icon: "success",
            title: " Coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="p-24 bg-[#F4F3F0]">
      <div className="p-12 text-center space-y-10">
        <h1 className="text-6xl text-[#374151] text-blod">Update New Coffee</h1>
      </div>
      <form action="" onSubmit={handleCoffeeupdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ---------name----------- */}
          <fieldset className="fieldset rounded-box  p-4">
            <label className="fieldset-legend text-black">Name</label>
            <input
              type="text"
              defaultValue={name}
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
              defaultValue={quantity}
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
              defaultValue={Supplier}
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
              defaultValue={Taste}
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
              defaultValue={Price}
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
              defaultValue={Details}
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
            defaultValue={Photo}
            className="input bg-[#FFFFFF] text-[#1B1A1A] w-full"
            placeholder="Coffee Photo URL"
            name="Photo"
          />
        </fieldset>
        {/* -------------button---------------- */}
        <input
          type="submit"
          value=" Update Coffee"
          className="btn w-full bg-[#331A15] text-white"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
