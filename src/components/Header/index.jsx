import React from "react";
import Button from "../Button";
import "./style.scss";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand logo">
          {"{" + "Gadsites"}
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-link">
              <a href="#" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
          </ul>
          <Button color="light" outline rounded className="cta">
            Contanct Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
