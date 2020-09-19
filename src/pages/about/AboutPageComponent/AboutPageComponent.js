import React, { Component } from 'react';
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import "./AboutPageComponent.scss";

class AboutPageComponent extends Component {
  render() {
    return (
      <div className="about-page-component-wrapper page-component-wrapper">
        <div className="about-page-main-content-wrapper">
          <TopNavBarComponent theme="white-black" />

          <div className="about-page-img-banner-wrapper"></div>

          <div className="about-page-main-content-inner-wrapper">
            
            <div className="about-content-wrapper">

              <div className="title-wrapper">
                <div className="title-text">ABOUT US</div>
                <div className="title-line"></div>
              </div>

              <div className="logo-wrapper"></div>

              <div className="about-text-wrapper">
              <div className="paragraph-wrapper">
                <span className="highlight">{StringTable.ABOUT.MAIN.PARAGRAPH_1.HIGHLIGHT}</span>
                <span className="normal">{StringTable.ABOUT.MAIN.PARAGRAPH_1.NORMAL}</span>
              </div>
              <div className="paragraph-wrapper">
                <span className="highlight">{StringTable.ABOUT.MAIN.PARAGRAPH_2.HIGHLIGHT}</span>
                <span className="normal">{StringTable.ABOUT.MAIN.PARAGRAPH_2.NORMAL}</span>
              </div>
              <div className="paragraph-wrapper">
                <span className="highlight">{StringTable.ABOUT.MAIN.PARAGRAPH_3.HIGHLIGHT}</span>
                <span className="normal">{StringTable.ABOUT.MAIN.PARAGRAPH_3.NORMAL}</span>
              </div>
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