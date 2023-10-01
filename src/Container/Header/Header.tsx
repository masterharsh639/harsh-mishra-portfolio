import Grid from "@mui/material/Grid";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Grid container xs={12} className="header">
      <Grid item xs={12} sm={3} md={3}>
        <p className="f-36">
          Harsh <span className="green-text">Mishra</span>
        </p>
      </Grid>
      <Grid item xs={6} className="navbar">
        <p className="f-18">HOME</p>
        <p className="f-18">ABOUT</p>
        <p className="f-18">WORK</p>
        <p className="f-18">SKILLS</p>
        <p className="f-18">CONTACT</p>
        <p className="f-18">RESUME</p>
      </Grid>
      <Grid className="mobile-navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <Grid className="gpt3__navbar-menu_container scale-up-center">
            <Grid className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">ABOUT</a>
              </p>
              <p>
                <a href="#work">WORK</a>
              </p>
              <p>
                <a href="#skills">SKILLS</a>
              </p>
              <p>
                <a href="#contact">CONTACT</a>
              </p>
              <p>
                <a href="#resume">RESUME</a>
              </p>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
