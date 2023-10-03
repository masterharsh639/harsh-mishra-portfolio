import { Grid } from "@mui/material";
import "./skills.css";
import SkillsCard from "../../Container/Card/SkillsCard";
import htmlIcon from "../../assest/htmlIcon.svg";
import nodejs from "../../assest/nodejs.svg";
import css3 from "../../assest/css3.svg";
import javascript from "../../assest/javascript.svg";
import bootstrap5 from "../../assest/bootstrap5.svg";
import react from "../../assest/react.svg";
import redux from "../../assest/redux.svg";
import mongodb from "../../assest/mongodb.svg";
import express from "../../assest/express.svg";
import postman from "../../assest/postman.svg";
import materialUI from "../../assest/materialUI.svg";
import java from "../../assest/java.svg";
import git from "../../assest/git.svg";
import mongoose from "../../assest/mongoose.png";
import nestjs from "../../assest/nestjs.svg";
import nextjs from "../../assest/nextjs.svg";

const data = [
  {
    title: "HTML",
    logo: htmlIcon,
  },
  {
    title: "CSS",
    logo: css3,
  },
  {
    title: "JAVASCRIPT",
    logo: javascript,
  },
  {
    title: "TYPESCRIPT",
    logo: htmlIcon,
  },
  {
    title: "BOOTSTRAP",
    logo: bootstrap5,
  },
  {
    title: "REACT",
    logo: react,
  },
  {
    title: "REDUX",
    logo: redux,
  },
  {
    title: "Nextjs",
    logo: nextjs,
  },
  {
    title: "MATERIAL UI",
    logo: materialUI,
  },
  {
    title: "JAVA",
    logo: java,
  },
  {
    title: "Node JS",
    logo: nodejs,
  },
  {
    title: "EXPRESS JS",
    logo: express,
  },
  {
    title: "MONGO",
    logo: mongodb,
  },
  {
    title: "POSTMAN",
    logo: postman,
  },
  {
    title: "GIT",
    logo: git,
  },
  {
    title: "MONGOOSE",
    logo: mongoose,
  },
  {
    title: "Nestjs",
    logo: nestjs,
  },
];
const Skills = () => {
  return (
    <Grid container xs={12} sm={12} md={12} xl={12} className="skills-section">
      <Grid item>
        <span className="f-36">My</span>
        <span className="green-text">Technical</span>{" "}
        <span className="f-36">Skills</span>
      </Grid>
      <Grid item sm={10} className="button-section">
        <p>
          <button className="button-css">All</button>
        </p>
        <p>
          <button className="button-css">Frontend</button>
        </p>
        <p>
          <button className="button-css">Backend</button>
        </p>
      </Grid>
      <Grid item xs={12} sm={10} md={10} xl={10} className="skills-list">
        {data.map((data, index) => (
          <Grid item key={index}>
            <SkillsCard title={data.title} logo={data.logo} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Skills;
