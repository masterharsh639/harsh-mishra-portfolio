import { Card, CardActions, CardContent, Typography } from "@mui/material";
import ButtonGroupComponent from "../ButtonGroup/ButtonGroupComponent";
import "./carddetail.css";

interface CardDetailProps {
  image: string;
  title: string;
  detail: string;
  stack: string;
}

const CardDetail = ({ image, title, detail, stack }: CardDetailProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img src={image} alt="image" className="card-image" />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ textAlign: "center", fontWeight: "700", fontFamily: "Poppins" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {detail}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Tech Stack:</p> {stack}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroupComponent linkedin={""} view={""} gitlink={""} />
      </CardActions>
    </Card>
  );
};

export default CardDetail;
