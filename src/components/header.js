import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./style.css";
const Header = () => {
  const [classe, setClass] = useState({
    clas: "hidden",
  });
  function handleShow(e) {
    if (classe.clas === "hidden") {
      setClass({
        clas: "visible ",
      });
    } else {
      setClass({
        clas: "hidden",
      });
    }
  }
  return (
    <div>
      <div className=" d-flex  flex-row justify-content-around w-100 bg-dark p-3 align-items-center w-100">
        <div className="logo">
          <NavLink to="/">
            <h2 className="text-warning fs-3">Redux-Toolkit</h2>
          </NavLink>
        </div>
        <div className="show-when-mobile">
          <label htmlFor="check" className="check">
            <i class="fas fa-bars-staggered fs-4"></i>
          </label>
          <input
            type="checkbox"
            onClick={handleShow}
            name="noname"
            id="check"
            className="d-none input"
          />
          <div className={classe.clas}>
            <NavLink to="/form" className="mobile">
              Form
            </NavLink>
            <NavLink to="/api" className="mobile">
              API
            </NavLink>
            <NavLink to="/counter" className="mobile">
              Counter
            </NavLink>
            <NavLink to="/products" className="mobile">
              Products
            </NavLink>
          </div>
        </div>
        <div className="liens">
          <NavLink to="/form" className="lien">
            Form
          </NavLink>
          <NavLink to="/api" className="lien">
            API
          </NavLink>
          <NavLink to="/counter" className="lien">
            Counter
          </NavLink>
          <NavLink to="/products" className="lien">
              Products
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
