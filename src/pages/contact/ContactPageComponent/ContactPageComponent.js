import React, { Component } from 'react';
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import { ImageTable } from "../../../service/ImageTable";
import "./ContactPageComponent.scss";

class ContactPageComponent extends Component {
  render() {
    return (
      <div className="about-page-component-wrapper page-component-wrapper">
        <div className="about-page-main-content-wrapper">
          <TopNavBarComponent theme="white-black" />

          <div className="about-page-img-banner-wrapper"></div>

          <div className="about-page-main-content-inner-wrapper">
            
            <div className="test">adsfasdfdas </div>
          </div>

          <BottomFooterComponent theme="black-white" />
        </div>
      </div>
    );
  }
}
export default ContactPageComponent;
