import React, { Component } from "react";
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import "./AboutPageComponent.scss";
import { ImageTable } from "../../../service/ImageTable";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class AboutPageComponent extends Component {
  render() {
    const paragraphs = StringTable.ABOUT.MAIN.PARAGRAPHS.map((para, index) => {
      const descriptionImage =
        index === 0 ? (
          <div
            className="description-wrapper"
            style={{
              backgroundImage: `url(${ImageTable.ABOUT_MEANING_IMAGE.IMG_02})`,
            }}
          ></div>
        ) : index === 1 ? (
          <div
            className="description-wrapper"
            style={{
              backgroundImage: `url(${ImageTable.ABOUT_MEANING_IMAGE.IMG_01})`,
            }}
          ></div>
        ) : null;

      return (
        <div className="paragraph-wrapper">
          <span className="highlight" style={{ color: para.highlight_color }}>
            {para.HIGHLIGHT}
          </span>
          <span className="normal">{para.NORMAL}</span>
          {descriptionImage}
        </div>
      );
    });

    return (
      <div className="about-page-component-wrapper page-component-wrapper">
        <div className="about-page-main-content-wrapper">
          <TopNavBarComponent theme="black-white" />

          <div className="about-page-img-banner-wrapper"></div>

          <div className="about-page-main-content-inner-wrapper">
            <div className="about-content-wrapper responsive-handler-wrapper">
              <div className="title-wrapper">
                <div className="title-text">{StringTable.ABOUT.TITLE}</div>
                <div className="title-line"></div>
              </div>

              {/* <div className="logo-wrapper"></div> */}

              {/* <div className="youtube_wrapper">{youtube_wrapper}</div> */}

              <div className="youtube_wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/KPP42p9TQT8?list=PLErqheOv0D5uYsfeMOGb-hdWe8IiO8PYz"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/KPP42p9TQT8?list=PLErqheOv0D5uYsfeMOGb-hdWe8IiO8PYz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

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
