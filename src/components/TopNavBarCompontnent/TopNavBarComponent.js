import React from "react";
import { NavLink } from "react-router-dom";
import { IconNavLinkComponent } from "../IconNavLinkComponent/IconNavLinkComponent";
import { IconTable } from "../../service/StringTable";

import "./TopNavBarComponent.scss";
export class TopNavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.state.showMenuSideNav = false;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  static defaultProps = {
    theme: "white-black",
  };

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
      showMenuSideNav: false,
    });
    console.log(this.state);
  }

  render() {
    let shouldShowWebElements = this.state.width >= 1200;
    let topNavCenterElement;
    let topNavRightElement;
    let MenuSideNav;

    if (shouldShowWebElements) {
      topNavCenterElement = (
        <div className="nav-tabs-wrapper">
          <div className="nav-item">
            <NavLink to={`/about`} activeClassName="current">
              ABOUT US
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to={`/members`} activeClassName="current">
              MEMBERS
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to={`/`} activeClassName="current">
              CAREER
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to={`/service`} activeClassName="current">
              SERVICE
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to={`/contact`} activeClassName="current">
              CONTACT
            </NavLink>
          </div>
        </div>
      );
      topNavRightElement = (
        <div className="short-cut-items-wrapper">
          <div className="short-cut-item-icon-wrapper">
            <IconNavLinkComponent
              imgSrc={
                this.props.theme === "white-black"
                  ? IconTable.HOME.BLACK
                  : IconTable.HOME.WHITE
              }
              linkTo="home"
            />
          </div>
          <div className="short-cut-item-icon-wrapper">
            <IconNavLinkComponent
              imgSrc={
                this.props.theme === "white-black"
                  ? IconTable.PEOPLE.BLACK
                  : IconTable.PEOPLE.WHITE
              }
              linkTo="home"
            />
          </div>
          <div className="short-cut-item-icon-wrapper">
            <IconNavLinkComponent
              imgSrc={
                this.props.theme === "white-black"
                  ? IconTable.LANGUAGE.BLACK
                  : IconTable.LANGUAGE.WHITE
              }
              linkTo="home"
            />
          </div>
        </div>
      );
    } else {
      topNavCenterElement = <div></div>;
      topNavRightElement = (
        <div className="short-cut-menu-icon-wrapper">
          <div
            className="menu-icon-wrapper"
            style={{
              backgroundImage: `url(${
                this.props.theme === "white-black"
                  ? IconTable.MENU.BLACK
                  : IconTable.MENU.WHITE
              })`,
            }}
          ></div>
        </div>
      );
    }

    return (
      <div
        className={`top-nav-bar-wrapper ${true ? "web" : "mobile"} ${
          this.props.theme
        }`}
      >
        <div className="title-wrapper">
          <NavLink to={`/`} activeClassName="current">
            ROUTE
          </NavLink>
        </div>

        {topNavCenterElement}

        <div className="top-nav-bar-right-wrapper">{topNavRightElement}</div>
      </div>
    );
  }
}

// export default TopNavBarComponent;

// console.log(window.location.pathname);
