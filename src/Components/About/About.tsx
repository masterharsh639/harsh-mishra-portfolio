import { Grid } from "@mui/material";
import "./about.css";
import backgroundShade from "../../assest/backgroudImage.svg";

const About = () => {
  return (
    <Grid container className="about-section">
      <Grid item xs={12} className="about-heading">
        <p>
          <span className="f-32">All</span>{" "}
          <span className="green-text">About</span>{" "}
          <span className="f-32">Me And My</span>{" "}
          <span className="green-text">Experience</span>{" "}
        </p>
      </Grid>
      <Grid item xs={12}>
        <p>
          <button>About me</button>
          <button>Experience</button>
        </p>
      </Grid>
      <Grid item xs={12} className="about-detail">
        <Grid xs={12} sm={5}>
          <p>
            <img src={backgroundShade} alt="" />
          </p>
        </Grid>
        <Grid xs={12} sm={5}>
          <ul>
            <li className="f-18">
              Hello! My name is Mohit Sehrawat & I enjoy creating things that
              live on the internet. I'm a passionate Developer, with strong
              administrative & communication skills, good attention to detail &
              the ability to write efficient code.
            </li>
            <li className="f-18">
              Hello! My name is Mohit Sehrawat & I enjoy creating things that
              live on the internet. I'm a passionate Developer, with strong
              administrative & communication skills, good attention to detail &
              the ability to write efficient code.
            </li>
            <li className="f-18">
              Hello! My name is Mohit Sehrawat & I enjoy creating things that
              live on the internet. I'm a passionate Developer, with strong
              administrative & communication skills, good attention to detail &
              the ability to write efficient code.
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
