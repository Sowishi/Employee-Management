import React from "react";

import Logout from "../Logout";

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <h3>Greetings, Mary Joy Estollas 🌞</h3>
      <div className="w-100 d-flex justify-content-end align-items-center my-3">
        <div className="px-5 mx-5">
          <button onClick={() => setIsAdding(true)}>Add Employee</button>
          <Logout setIsAuthenticated={setIsAuthenticated} />
        </div>
      </div>
    </header>
  );
};

export default Header;
