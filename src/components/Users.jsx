import { useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUser] = useState(initialUsers);
  // ---------------handelDelete-------------------
  const handelDelete = (id) => {
    // console.log("hello", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   ------------delet oparetion------------------------
        fetch(
          `https://coffee-store-server-ce8t4z2kr-st7691s-projects.vercel.app/users/${id}`,
          {
            method: "DELETE",
          },
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              console.log("after delete data ", data);
              const reamainingUsers = users.filter((user) => user._id !== id);
              setUser(reamainingUsers);
              //   ------sweet alrt------
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h2> Users :{users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.adderss}</div>
                    </div>
                  </div>
                </td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <th className="space-x-2 ">
                  <button className="btn text-white bg-primary btn-xs">
                    V
                  </button>
                  <button className="btn text-white bg-gray-500 btn-xs">
                    E
                  </button>
                  {/* --------delete button------ */}
                  <button
                    className="btn text-white bg-red-700 btn-xs"
                    onClick={() => handelDelete(user._id)}
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
