import React from "react";
import "./Main.scss";

function Main() {
  return (
    <div id="main">
      <div className="main-title">안녕하세요</div>
      <div className="main-content">
        <div className="intro">자기소개</div>
        <div className="skill">기술스택</div>
        <div className="archive">아카이브</div>
        <div className="project">프로젝트</div>
        <div className="career">커리어</div>
      </div>
    </div>
  );
}

export default Main;
