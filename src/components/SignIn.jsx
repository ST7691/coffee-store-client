import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  // -----------handelSignIn----------
  const handelSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    // ------forebase----signInUser--------------
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const signInInfo = {
          email,

          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // updatae to data base
        fetch(
          "https://coffee-store-server-ce8t4z2kr-st7691s-projects.vercel.app/users",
          {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(signInInfo),
          },
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("after update patch data", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="text-2xl font-bold">Sign In now!</h3>
        <form onSubmit={handelSignIn} className="fieldset">
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
          {/* forgot */}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          {/* link */}
          <Link to={"/signup"}>
            <span className="text-blue-600 underline">Sign up</span>
          </Link>
          {/* login button  */}
          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
