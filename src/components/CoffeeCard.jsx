import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, Photo, name, Price, quantity } = coffee;
  // --------------------handel delet button-----------------------
  const handleDelete = (_id) => {
    console.log("click delete id : ", _id);
    // ----------------sweet alert ------------------
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        //   --------------start delete coffee----------------------
        fetch(
          `https://coffee-store-server-ce8t4z2kr-st7691s-projects.vercel.app/coffees/${_id}`,
          {
            method: "DELETE",
          },
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              console.log("after delete ", data);
              // ------------------sweet alert -------------------
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee  has been deleted.",
                icon: "success",
              });
              // -----------remove coffee ui ----------------
              const remaimingCoffee = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaimingCoffee);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-sm p-[30px] ">
      <figure>
        <img className="w-[185px] h-[240px]" src={Photo} alt="Movie" />
      </figure>
      <div className="flex justify-around w-full mt-8">
        <div className="">
          <h2 className="card-title"> Name : {name}</h2>
          <p>Quantity : {quantity}</p>
          <p>Price : {Price}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            {/* ---------------details------------ */}
            <Link to={`/coffee/${_id}`}>
              <button className="btn join-item"> Details</button>
            </Link>
            {/* ---------------updata ----------------- */}
            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn join-item">edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item  bg-[#EA4744]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
