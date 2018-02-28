import React, { Component } from 'react';
import './FoldTwo.scss';
// import Face from './face.svg';
import portfolio from '../../portfolio/eric.json';
import devices from './device-set-1.png';

class FoldTwo extends Component {
  render() {
    // console.log(portfolio)
    return (
      <div className="FoldTwo" id="FoldTwo">
        <div className="content">
          <div className="anchor2"></div>
          {/* <h3><b>Latest</b></h3> */}
          {portfolio.map((project, index) => {

            let cssClasses,
                projectImages,
                position,
                deskImageHTML,
                mobImageHTML,
                tabImageHTML,
                deskImageClasses,
                mobImageClasses,
                tabImageClasses = '';

            if (index % 2) {
              position = 'right';
            } else {
              position = 'left';
            }
            cssClasses = `project ${position}`

            if (project.deskImage || project.mobImage || project.tabletImage) {
              deskImageClasses = "projectImages desktopImage";
              mobImageClasses = "projectImages mobileImage";
              tabImageClasses = "projectImages tabImage";

              if (project.deskImage === "x") {
                deskImageHTML = (
                  <div className="noDeskPic"><br/> X </div>
                )
              } else {
                deskImageHTML = (
                  <img className={deskImageClasses} src={project.deskImage} role="presentation" />
                );
              };

              if (project.mobImage === "x") {
                mobImageHTML = (
                  <div className="noMobPic"><br/> X </div>
                )
              } else {
                mobImageHTML = (
                  <img className={mobImageClasses} src={project.mobImage} role="presentation" />
                );
              };

              if (project.tabletImage === "x") {
                tabImageHTML = (
                  <div className="noTabPic"><br/> X </div>
                )
              } else {
                tabImageHTML = (
                  <img className={tabImageClasses} src={project.tabletImage} role="presentation" />
                );
              };

            }

            let github, demo, live = '';

            if (project.gitURL === "") {
              github = 'githubLink noLink prolink'
            } else { github = 'prolink' }
            if (project.demoURL === "") {
              demo = 'demoLink noLink prolink'
            } else { demo = 'prolink' }
            if (project.liveURL === "") {
              live = 'liveLink noLink prolink'
            } else { live = 'prolink' }

            if (project.deskImage && project.mobImage && project.tabletImage) {
              projectImages = (
                <div>
                  <a href={project.gitURL} target="_blank" className={github}>Github </a>
                  <a href={project.demoURL} target="_blank" className={demo}>Demo </a>
                  <a href={project.liveURL} target="_blank" className={live}>Live</a>
                </div>
              )
            }

            return (
              <div
              key={index}
              className={cssClasses}
              id={"project" + index}>
                <div className="preview">
                  <img src={devices} className="devices" role="presentation"/>
                  {deskImageHTML}
                  {mobImageHTML}
                  {tabImageHTML}
                </div>
                <h3>{project.title}</h3>
                <br/>
                <br/>
                <p>{project.description}</p>
                <div className="proLinks">
                  {projectImages}
                </div>
              </div>
            )
          })
        }
        </div>
        <h3 id="moreG"><a id="moreG" href="https://www.github.com/EricCasey" target="_blank">github</a></h3>
      </div>
    );
  }
}

export default FoldTwo;
