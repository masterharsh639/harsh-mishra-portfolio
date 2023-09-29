import { Grid } from "@mui/material";
import "./herosection.css";
import backgroundShade from "../../assest/backgroudImage.svg";

const HeroSection = () => {
  return (
    <Grid container xs={12} className="hero-section">
      <Grid item xs={12} sm={4}>
        <p className="f-32">Hello , my name is</p>
        <p className="f-64">Harsh Mishra</p>
        <p className="f-36">
          I am <span className="green-text">Full Stack Developer.</span>
        </p>
        <p>
          <button className="resume-button">Resume</button>
        </p>
      </Grid>
      <Grid item xs={12} sm={3}>
        <p>
          <img src={backgroundShade} alt="" className="background-logo" />
        </p>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
