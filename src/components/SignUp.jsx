import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  console.log(createUser);
  // -------------------handle sign up-------------------------
  const handelSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form); // এটা FormData object
    const { email, password, ...restFromData } = Object.fromEntries(
      formData.entries(),
    );

    // const name = formData.get("name");
    // const email = formData.get("email");
    // const password = formData.get("password");

    // console.log({ email, password, userProfile });
    //   ----------------------sign up user ---------------------
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // email patanu server a
        const userProfile = {
          email,
          ...restFromData,
          creationTime: result?.user?.metadata?.creationTime,
          lastSignInTime: result?.user?.metadata?.lastSignInTime,
        };
        //   user data collection mogo db------------post-----------------------
        fetch(
          "https://coffee-store-server-ce8t4z2kr-st7691s-projects.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userProfile),
          },
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("after user profile", data);

              //   sweet alert
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Your account has created!!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="text-2xl font-bold">Sign Up now!</h3>
        <form onSubmit={handelSignUp} className="fieldset">
          {/* ----------------name------------------ */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name="name" />
          {/* ----------------address------------------ */}
          <label className="label">Adderss</label>
          <input
            type="text"
            className="input"
            placeholder="Adderss"
            name="adderss"
          />
          {/* --------------------phone-------------- */}
          <label className="label">Phone</label>
          <input
            type="text"
            className="input"
            placeholder="Phone Number"
            name="phone"
          />
          {/* ---------------photo------------------- */}
          <label className="label">Photo</label>
          <input
            type="text"
            className="input"
            placeholder="Photo url"
            name="photo"
          />
          {/* -----------------email----------------- */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="email"
            name="email"
          />
          {/* --------------password--------------- */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />
          {/* link */}

          <Link to={"/signin"}>
            <span className="text-blue-600 underline">Login</span>
          </Link>
          {/* sign up button */}
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
