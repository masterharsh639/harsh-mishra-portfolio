import { Grid } from "@mui/material";
import "./projectdetail.css";
import CardDetail from "../../Container/DetailCard/CardDetail";
import carhub from "../../assest/carhub.jpg";

const data = [
  {
    image: carhub,
    title: "CarHub",
    detail: "https://github.com/masterharsh639/CarShowCase",
    stack: "React,Node, Html,Css,Javascript,Typescript,Rapid API",
  },
  {
    image: carhub,
    title: "CarHub",
    detail: "https://github.com/masterharsh639/CarShowCase",
    stack: "React,Node, Html,Css,Javascript,Typescript,Rapid API",
  },
  {
    image: carhub,
    title: "CarHub",
    detail: "https://github.com/masterharsh639/CarShowCase",
    stack: "React,Node, Html,Css,Javascript,Typescript,Rapid API",
  },
  {
    image: carhub,
    title: "CarHub",
    detail: "https://github.com/masterharsh639/CarShowCase",
    stack: "React,Node, Html,Css,Javascript,Typescript,Rapid API",
  },
  {
    image: carhub,
    title: "CarHub",
    detail: "https://github.com/masterharsh639/CarShowCase",
    stack: "React,Node, Html,Css,Javascript,Typescript,Rapid API",
  },
  {
    image: carhub,
    title: "CarHub",
    detail: "https://github.com/masterharsh639/CarShowCase",
    stack: "React,Node, Html,Css,Javascript,Typescript,Rapid API",
  },
  {
    image: carhub,
    title: "CarHub",
    detail: "https://github.com/masterharsh639/CarShowCase",
    stack: "React,Node, Html,Css,Javascript,Typescript,Rapid API",
  },
  {
    image: carhub,
    title: "CarHub",
    detail: "https://github.com/masterharsh639/CarShowCase",
    stack: "React,Node, Html,Css,Javascript,Typescript,Rapid API",
  },
  {
    image: carhub,
    title: "CarHub",
    detail: "https://github.com/masterharsh639/CarShowCase",
    stack: "React,Node, Html,Css,Javascript,Typescript,Rapid API",
  },
];
const ProjectDetail = () => {
  return (
    <Grid container xs={12} sm={12} md={12} className="project-detail">
      <Grid item xs={12}>
        <p>
          <span className="f-36">All</span>{" "}
          <span className="green-text">About</span>{" "}
          <span className="f-36">Me And My</span>{" "}
          <span className="green-text">Experience</span>{" "}
        </p>
      </Grid>
      <Grid item xs={12} className="button-section">
        <p>
          <button className="button-css">All</button>
        </p>
        <p>
          <button className="button-css">React</button>
        </p>
        <p>
          <button className="button-css">BackEnd</button>
        </p>
      </Grid>
      <Grid item xs={10} className="project-cards">
        {data.map((item, index) => (
          <Grid item key={index}>
            <CardDetail
              image={item.image}
              title={item.title}
              detail={item.detail}
              stack={item.stack}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectDetail;
