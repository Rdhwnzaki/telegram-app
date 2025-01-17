/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Assets from "../../images";
import { loginUser } from "../../redux/actions/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function login() {
  const [email_user, setEmail] = useState("");
  const [password_user, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email_user);
    console.log(password_user);
    let data = {
      email_user,
      password_user,
    };
    dispatch(loginUser(data, navigate));
  };
  return (
    <div>
      <div className="container" style={{ marginTop: "90px", width: "500px" }}>
        <div className="row shadow rounded-4">
          <div className="col-md-12">
            <div className="container">
              <h4 className="mb-5 mt-4" style={{ color: "#7E98DF" }}>
                Login
              </h4>
              <h6 className="text-start mb-5 ms-2">Hi, Welcome back!</h6>
              <form onSubmit={postData}>
                <h6 className="form-label text-start text-secondary ms-2 mb-3">
                  Email
                </h6>
                <input
                  type="email"
                  value={email_user}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className=" mb-4 form-control"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    borderRadius: "0px",
                    marginTop: "-10px",
                  }}
                />
                <h6 className="form-label text-start text-secondary ms-2 mb-3">
                  Password
                </h6>
                <input
                  type="password"
                  className=" mb-4 form-control"
                  value={password_user}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    borderRadius: "0px",
                    marginTop: "-10px",
                  }}
                />
                <Link to="/forgot-password" style={{ textDecoration: "none" }}>
                  <h6 className="text-end" style={{ color: "#7E98DF" }}>
                    Forgot password?
                  </h6>
                </Link>
                <button
                  type="submit"
                  className="btn text-white rounded-5 mt-3"
                  style={{
                    backgroundColor: "#7E98DF",
                    width: "300px",
                    height: "50px",
                  }}
                >
                  Login
                </button>
              </form>
              <h6 className="my-4">Login with</h6>
              <button
                className="btn btn-new rounded-5 mt-3 mb-5"
                style={{
                  borderColor: "#7E98DF",
                  color: "#7E98DF",
                  width: "300px",
                  height: "50px",
                }}
              >
                <img src={Assets.google} alt="" className="me-3" />
                Google
              </button>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h6 className="mb-4">
                  Don’t have an account?{" "}
                  <h6 style={{ color: "#7E98DF" }}>Sign Up</h6>
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
