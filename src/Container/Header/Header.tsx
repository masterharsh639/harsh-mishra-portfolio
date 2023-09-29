import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./header.css";

const Header = () => {
  return (
    <Grid container xs={12} className="header">
      <Grid item xs={12} sm={3} md={3}>
        <p className="f-36">
          Harsh <span className="green-text">Mishra</span>
        </p>
      </Grid>
      {/* <Grid item xs={6} className="navbar">
        <p className="f-18">HOME</p>
        <p className="f-18">ABOUT</p>
        <p className="f-18">WORK</p>
        <p className="f-18">SKILLS</p>
        <p className="f-18">CONTACT</p>
        <p className="f-18">RESUME</p>
        <p className="f-18">Logo</p>
      </Grid> */}
    </Grid>
  );
};

export default Header;
