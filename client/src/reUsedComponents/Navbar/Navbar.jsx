import React from "react";
import AddIcon from "@mui/icons-material/Add";
import img from "../../assets/images/img.jpg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <section id="Navbar">
        <div className="container">
          <div className="logo">
            <h1>
              <Link to="/">BLOG</Link>
            </h1>
          </div>
          <div className="nav-links">
            {/* <button>category</button> */}
            <Link to="/addpost">
              {" "}
              <button>
                Create Blog <AddIcon className="icon" />
              </button>
            </Link>
            <Link to="/profile">
              <div
                className="profile"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
