import React, { Component } from "react";
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import { ImageTable } from "../../../service/ImageTable";
import "./ServicePageComponent.scss";

class ServicePageComponent extends Component {
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
              const descriprions = item.descriptions.map((desc) => (<div className="block-description">{desc}</div>));
              return (
                <div className="block-item shadow-2">
                  <div className="block-inner-left-wrapper" style={{backgroundColor:`${item.color}`}}></div>
                  <div className="block-inner-right-wrapper">
                    <div className="block-title">{item.title}</div>
                    {descriprions}
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
        <div className="service-card-wrapper shadow-3">
          <div className="card-title-wrapper shadow-1">
            <div className="title-text">{cardData.TITLE}</div> <div className="title-line"></div>
          </div>
          <div className="card-content-wrapper">{ cardContent }</div>
        </div>
      );
    });

    return (
      <div className="service-page-component-wrapper page-component-wrapper">
        <div className="service-page-main-content-wrapper">
          <TopNavBarComponent theme="white-black" />

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
              </div>

              <div className="service-text-wrapper">
                {serviceContentItems}
              </div>

            </div>
          </div>

          <BottomFooterComponent theme="black-white" />
        </div>
      </div>
    );
  }
}
export default ServicePageComponent;
