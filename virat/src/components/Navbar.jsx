import React from "react";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div>
          {" "}
          <Link to="Home" smooth={true} duration={500}>
            <div className="design">Home</div>
          </Link>
        </div>

        <div>
          <Link to="restaurant" smooth={true} duration={500}>
            <div className="design">Restaurant</div>
          </Link>{" "}
        </div>

        <div>
          <Link to="favourite" smooth={true} duration={500}>
            <div className="design">My Favourite</div>
          </Link>
        </div>

        <div>
          <Link to="Gallery" smooth={true} duration={500}>
            <div className="design">Gallery</div>
          </Link>{" "}
        </div>

        <div>
          {" "}
          <Link to="insta" smooth={true} duration={500}>
            <div className="design">Instagram</div>
          </Link>{" "}
        </div>

        <div>
          <Link to="footer" smooth={true} duration={500}>
            <div className="design">Contact</div>
          </Link>{" "}
        </div>

        <div>
          <Link1 to="signup-login">
            <div className="design1">Logout</div>
          </Link1>{" "}
        </div>
      </div>
    </>
  );
}
