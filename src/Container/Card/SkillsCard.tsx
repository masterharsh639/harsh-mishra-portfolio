import { CardContent, Typography, Card } from "@mui/material";
import "./skillscard.css";

interface SkillsCardProps {
  title: string;
  logo: string;
}

const SkillsCard = ({ logo, title }: SkillsCardProps) => {
  return (
    <Card sx={{ backgroundColor: "#F0F8FF" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          <img src={logo} alt="logo" className="logoSize" />
        </Typography>
        <Typography sx={{ fontSize: 14, textAlign: "center" }} color="#000000">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillsCard;
