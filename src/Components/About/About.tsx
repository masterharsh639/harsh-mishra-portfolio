import { Grid } from "@mui/material";
import "./about.css";
import  aboutImage from '../../assest/aboutImage.jpg';

const About = () => {
  return (
    <Grid>
      <Grid container className="about-section">
        <Grid item xs={12} className="about-heading">
          <p>
            <span className="f-36">All</span>{" "}
            <span className="green-text">About</span>{" "}
            <span className="f-36">Me And My</span>{" "}
            <span className="green-text">Experience</span>{" "}
          </p>
        </Grid>
        <Grid item xs={12}>
          <p className="aboutSection-button">
            <button className="about-button">About me</button>
            <button className="exp-button">Experience</button>
          </p>
        </Grid>
        <Grid item xs={12} className="about-detail">
          <Grid xs={12} sm={5}>
            <p>
              <img src={aboutImage} alt="" className="aboutImage"/>
            </p>
          </Grid>
          <Grid xs={12} sm={5}>
            <ul>
              <li className="f-28">
                Hello! My name is Harsh Mishra & I enjoy creating things that
                live on the internet. I'm a passionate Developer, with strong
                administrative & communication skills, good attention to detail
                & the ability to write efficient code.
              </li>
              <li className="f-28" style={{ marginTop: "2.5rem" }}>
                Hello! My name is Harsh Mishra & I enjoy creating things that
                live on the internet. I'm a passionate Developer, with strong
                administrative & communication skills, good attention to detail
                & the ability to write efficient code.
              </li>
              <li className="f-28" style={{ marginTop: "2.5rem" }}>
                Hello! My name is Harsh Mishra & I enjoy creating things that
                live on the internet. I'm a passionate Developer, with strong
                administrative & communication skills, good attention to detail
                & the ability to write efficient code.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
