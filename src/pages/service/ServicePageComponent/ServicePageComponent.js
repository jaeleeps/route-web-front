import React, { Component } from "react";
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import { ImageTable } from "../../../service/ImageTable";
import "./ServicePageComponent.scss";

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

class ServicePageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      showDownload: true,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      ...this.state,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log(this.state);
  }

  render() {
    const serviceContentItems = StringTable.SERVICE.MAIN.CARDS.map((cardData) => {
      const cardContent = cardData.CONTENTS.map((cardContent) => {
        switch (cardContent.type) {
          case "paragraph":
            return (
              <div className="paragraph">
                {cardContent.items.map((innerContent) => (<div>{innerContent}</div>))}
              </div>
            )
            break;
          case "subtitle":
            return (
              <div className="subtitle">
                {cardContent.items.map((innerContent) => (<div>{innerContent}</div>))}
              </div>
              )
            break;
          case "block":
            const blockItems = cardContent.items.map((item) => {
              const descriprions = item.hasOwnProperty('descriptions') && item.descriptions.length > 0
                ? item.descriptions.map((desc) => (<div className="block-description">{desc}</div>))
                : null;
              return (
                <div className="block-item shadow-2">
                  <div className="block-inner-left-wrapper" style={{backgroundColor:`${item.color}`}}></div>
                  <div className="block-inner-right-wrapper">
                    <div className="block-inner-right-content-wrapper">
                      <div className={`block-title ${item.type}`}>{item.title.toUpperCase()}</div>
                      {descriprions}
                    </div>
                  </div>
                </div>
              )
            });
            return (
              <div className="block-wrapper">{blockItems}</div>
            );
            break;
          default:
            return null;
        }
      });
      return (
        <div className="service-text-wrapper">
          <div className="service-card-wrapper shadow-3">
            <div className="card-title-wrapper shadow-1">
              <div className="title-text">{cardData.TITLE}</div> <div className="title-line" style={{backgroundColor:cardData.LINE_COLOR}}></div>
            </div>
            <div className="card-content-wrapper">{ cardContent }</div>
          </div>
        </div>
      );
    });

    let responsiveFlexWrapper = this.state.width >= 720
    ? (
      <div className="service-cards-wrapper">
        <div className="service-cards-column web">
          {serviceContentItems.filter((_, i) => i % 2 === 0)}
        </div>
        <div className="divider"></div>
        <div className="service-cards-column web">
          {serviceContentItems.filter((_, i) => i % 2 === 1)}
        </div>
      </div>
    )
    : (
      <div className="service-cards-wrapper">
        <div className="divider"></div>
        <div className="service-cards-column">
          {serviceContentItems}
        </div>
        <div className="divider"></div>
      </div>
    );

    return (
      <div className="service-page-component-wrapper page-component-wrapper">
        <div className="service-page-main-content-wrapper">
          <TopNavBarComponent theme="black-white" />

          <div className="service-page-img-banner-wrapper"></div>

          <div className="service-page-main-content-inner-wrapper">
            <div className="service-content-wrapper responsive-handler-wrapper">
              <div className="title-wrapper">
                <div className="title-text">{StringTable.SERVICE.TITLE}</div>
                <div className="title-line"></div>
              </div>

              <div className="desc-color-wrapper">
                <div className="text-wrapper">{StringTable.SERVICE.DESCRIPTION}</div>
                <div className="desc-log-wrapper" style={{backgroundImage: `url(${ImageTable.LOGO})`}}></div>
                {/* <div></div> */}
              </div>

              <div className="download-wrapper shadow-2">
                <div className="upper">
                  <InsertDriveFileIcon style={{color:'#cfcfcf', fontSize:40}}/>
                  {/* '#92D050' */}
                  <span>DOWNLOAD BROCHURE</span>
                </div>
                <div className="lower">
                  {/* <InsertDriveFileIcon style={{color:'#cfcfcf', fontSize:32}}/> */}
                  <div className="lang-wrapper shadow-1">
                    <a target="_blank" href='https://firebasestorage.googleapis.com/v0/b/route2020-web.appspot.com/o/file%2FBrochure_Eng.pdf?alt=media&token=65f85234-ee87-48cb-9fba-a4e91743351e' download>
                      ENGLISH</a>
                  </div>
                  <div className="lang-wrapper shadow-1">
                    <a target="_blank" href='https://firebasestorage.googleapis.com/v0/b/route2020-web.appspot.com/o/file%2FBrochure_Kor.pdf?alt=media&token=3949f2ca-e0be-4131-ad8e-95b1c0f8be4a' download>
                      KOREAN</a>
                  </div>
                </div>
              </div>

              {/* <div className="service-text-wrapper">
                {serviceContentItems}
              </div> */}

              {responsiveFlexWrapper}

            </div>
          </div>

          <BottomFooterComponent theme="black-white" />
        </div>
      </div>
    );
  }
}
export default ServicePageComponent;
