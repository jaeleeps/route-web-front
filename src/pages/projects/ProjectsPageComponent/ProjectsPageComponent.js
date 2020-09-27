import React, { Component } from 'react';
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import "./ProjectsPageComponent.scss";

class ProjectsPageComponent extends Component {
  render() {
    const paragraphs = StringTable.PROJECTS.MAIN.PARAGRAPHS.map((para) => {
      let content;
      if (para.type === 'text') {
        content = (<span className="normal">{para.contents}</span>);
      } else if (para.type === 'list') {
        content = (
          <div className="list-wrapper">
            {
              para.contents.map((element) => (
                <div className="list-item">{element}</div>
              ))
            }
          </div>
        )
      }
      return (
        <div className="paragraph-wrapper">
          {content}
        </div>
      )
    })
    return (
      <div className="projects-page-component-wrapper page-component-wrapper">
        <div className="projects-page-main-content-wrapper">
          <TopNavBarComponent theme="black-white" />

          <div className="projects-page-img-banner-wrapper"></div>

          <div className="projects-page-main-content-inner-wrapper">
            
            <div className="projects-content-wrapper responsive-handler-wrapper">

              {/* <div className="title-wrapper">
                <div className="title-text">PROJECTS</div>
                <div className="title-line"></div>
              </div> */}

              <div className="be-our-client-wrapper" >
                <div className="content"><div className="logo"></div><div className="text">BE OUR CLIENT</div></div>
                <div className="overlay"></div>
              </div>

              {/* <div className="logo-wrapper"></div> */}

              <div className="projects-text-wrapper">
              {paragraphs}
              </div>
            </div>
          </div>

          <BottomFooterComponent theme="black-white" />
        </div>
      </div>
    );
  }
}
export default ProjectsPageComponent;