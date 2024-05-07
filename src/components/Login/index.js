import React, { useState } from "react";
import Swal from "sweetalert2";

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = "majoy@gmail.com";
  const adminPassword = "majoy";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem("is_authenticated", true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: "success",
            title: "Successfully logged in!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Incorrect email or password.",
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div
      className="container-fluid vh-100"
      style={{
        backgroundImage: "url(" + "https://picsum.photos/id/1/5000/3333" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row vh-100">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <form
            className="w-100 p-5 bg-white rounded mx-5"
            onSubmit={handleLogin}
          >
            <h1>Admin Login</h1>
            <h3 style={{ fontStyle: "italic" }}>Employee Management System</h3>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="qwerty"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              style={{ marginTop: "12px" }}
              className="w-100 py-3 mt-2"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
