import React, { Component } from "react";
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import "./AboutPageComponent.scss";
import { ImageTable } from "../../../service/ImageTable";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class AboutPageComponent extends Component {
  render() {
    const paragraphs = StringTable.ABOUT.MAIN.PARAGRAPHS.map((para, index) => {
      
      const descriptionImage = index === 0
        ? (
          <div className="description-wrapper" style={{backgroundImage: `url(${ImageTable.ABOUT_MEANING_IMAGE.IMG_02})`}}></div>
        )
        : index === 1
          ? <div className="description-wrapper" style={{backgroundImage: `url(${ImageTable.ABOUT_MEANING_IMAGE.IMG_01})`}}></div>
          : null;

      
      return (
        <div className="paragraph-wrapper">
          <span className="highlight" style={{ color: para.highlight_color }}>
            {para.HIGHLIGHT}
          </span>
          <span className="normal">{para.NORMAL}</span>
          { descriptionImage }
        </div>
      )
    });
    return (
      <div className="about-page-component-wrapper page-component-wrapper">
        <div className="about-page-main-content-wrapper">
          <TopNavBarComponent theme="black-white" />

          <div className="about-page-img-banner-wrapper"></div>

          <div className="about-page-main-content-inner-wrapper">
            <div className="about-content-wrapper responsive-handler-wrapper">
              <div className="title-wrapper">
                <div className="title-text">ABOUT US</div>
                <div className="title-line"></div>
              </div>

              <div className="logo-wrapper"></div>

              {/* <div className="description-img-wrapper">
                <Carousel showArrows={true}>
                <div className="carousel-item">
                    <img className="carousel-item-img" src={ImageTable.LOGO.COLOR} />
                  </div>
                  <div className="carousel-item">
                    <img className="carousel-item-img" src={ImageTable.ABOUT_MEANING_IMAGE.IMG_01} />
                  </div>
                  <div className="carousel-item">
                    <img className="carousel-item-img" src={ImageTable.ABOUT_MEANING_IMAGE.IMG_02} />
                  </div>
                </Carousel>
              </div> */}

              <div className="about-text-wrapper">{paragraphs}</div>
            </div>
          </div>

          <BottomFooterComponent theme="black-white" />
        </div>
      </div>
    );
  }
}
export default AboutPageComponent;