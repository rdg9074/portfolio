import React from "react";
import "./Main.scss";
import AboutMe from "../components/AboutMe";
import SkillStack from "../components/SkillStack";
import Archive from "../components/Archive";
import Project from "../components/Project";
import Career from "../components/Career";
import Title from "../components/Title";

function Main() {
  return (
    <div id="main">
      <div className="main-title">
        <Title/>
      </div>
      <div className="main-content">
        <div className="main-intro">
          <AboutMe/>
        </div>
        <div className="main-skill">
          <SkillStack/>
        </div>
        <div className="main-archive">
          <Archive/>
        </div>
        <div className="main-project">
          <Project/>
        </div>
        <div className="main-career">
          <Career />
        </div>
      </div>
    </div>
  );
}

export default Main;
