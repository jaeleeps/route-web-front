import React, { Component } from 'react';
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import "./ProjectsPageComponent.scss";

class ProjectsPageComponent extends Component {
  render() {
    const paragraphs = StringTable.ABOUT.MAIN.PARAGRAPHS.map((para) => (
      <div className="paragraph-wrapper">
        <span className="highlight" style={{color: para.highlight_color}}>{para.HIGHLIGHT}</span>
        <span className="normal">{para.NORMAL}</span>
      </div>
    ))
    return (
      <div className="career-page-component-wrapper page-component-wrapper">
        <div className="career-page-main-content-wrapper">
          <TopNavBarComponent theme="black-white" />

          <div className="career-page-img-banner-wrapper"></div>

          <div className="career-page-main-content-inner-wrapper">
            
            <div className="career-content-wrapper responsive-handler-wrapper">

              <div className="title-wrapper">
                <div className="title-text">CAREER</div>
                <div className="title-line"></div>
              </div>

              <div className="logo-wrapper"></div>

              <div className="career-text-wrapper">
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