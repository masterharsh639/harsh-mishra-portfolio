import { Grid } from "@mui/material";

interface ButtonGroupProps {
  linkedin: string;
  view: string;
  gitlink: string;
}
const ButtonGroup = ({ linkedin, view, gitlink }: ButtonGroupProps) => {
  return (
    <Grid container xs={12} sm={12} md={12}>
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default ButtonGroup;
