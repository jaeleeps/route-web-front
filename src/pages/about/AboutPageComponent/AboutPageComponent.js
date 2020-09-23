import React, { Component } from 'react';
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import "./AboutPageComponent.scss";

class AboutPageComponent extends Component {
  render() {
    const paragraphs = StringTable.ABOUT.MAIN.PARAGRAPHS.map((para) => (
      <div className="paragraph-wrapper">
        <span className="highlight" style={{color: para.highlight_color}}>{para.HIGHLIGHT}</span>
        <span className="normal">{para.NORMAL}</span>
      </div>
    ))
    return (
      <div className="about-page-component-wrapper page-component-wrapper">
        <div className="about-page-main-content-wrapper">
          <TopNavBarComponent theme="white-black" />

          <div className="about-page-img-banner-wrapper"></div>

          <div className="about-page-main-content-inner-wrapper">
            
            <div className="about-content-wrapper responsive-handler-wrapper">

              <div className="title-wrapper">
                <div className="title-text">ABOUT US</div>
                <div className="title-line"></div>
              </div>

              <div className="logo-wrapper"></div>

              <div className="about-text-wrapper">
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
export default AboutPageComponent;