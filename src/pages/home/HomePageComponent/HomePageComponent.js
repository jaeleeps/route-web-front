import React, { Component } from "react";
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import "./HomePageComponent.scss";

class HomePageComponent extends Component {
  static defaultProps = {
    videoURL:
      "https://firebasestorage.googleapis.com/v0/b/route2020-web.appspot.com/o/background%2Fbackground-video-01.webm?alt=media&token=148baa2b-0c85-43d8-af71-047546c1802a",
  };

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
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
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="home-page-component-wrapper page-component-wrapper">
        <div className="home-background-wrapper">
          <video id="onboardingVideo" loop muted autoPlay playsInline poster="src/assets/images/backgroud-video-poster.png">
            <source src={this.props.videoURL} type="video/mp4" />
          </video>
        </div>
        <div className="home-page-main-content-wrapper">
          <TopNavBarComponent theme="transparent-white" />

          <div className="home-page-main-content-inner-wrapper">
            <div
              className={`main-logo-content-wrapper ${this.state.width >= 1200 ? "web" : "mobile"}`}
            >
              <div className="logo-img-wrapper"></div>
              <div className="title-text-wrapper">ROUTE</div>
              <div className="subtitle-text-wrapper">
                NONPROFIT CONSULTING ORGANIZATION
              </div>
            </div>
          </div>

          <BottomFooterComponent theme="transparent-black" />
        </div>
      </div>
    );
  }
}
export default HomePageComponent;
