import { Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import VideocamIcon from "@mui/icons-material/Videocam";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./buttongroupcomponent.css";

interface ButtonGroupProps {
  linkedin: string;
  view: string;
  gitlink: string;
}
const ButtonGroup = ({ linkedin, view, gitlink }: ButtonGroupProps) => {
  return (
    <Grid container xs={12} sm={12} md={12} className="button-group">
      <Grid item>
        <a href={linkedin}>
          <IconButton sx={{ color: "#000000" }}>
            <VideocamIcon />
          </IconButton>
        </a>
      </Grid>
      <Grid item>
        <a href={linkedin}>
          <IconButton sx={{ color: "#000000" }}>
            <VisibilityIcon />
          </IconButton>
        </a>
      </Grid>
      <Grid item>
        <a href={linkedin}>
          <IconButton sx={{ color: "#000000" }}>
            <GitHubIcon />
          </IconButton>
        </a>
      </Grid>
    </Grid>
  );
};

export default ButtonGroup;
