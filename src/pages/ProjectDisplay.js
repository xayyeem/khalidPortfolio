import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import Langauge from "@material-ui/icons/Language";
// import LanguageIcon from '@material-ui/icons/';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt='zx' />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="links">
        <a href={project.github}>
      <GitHubIcon />
        </a>
      <a href={project.url}>
      <Langauge/>
      </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
