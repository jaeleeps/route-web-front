import React from "react";
import { NavLink, Redirect } from "react-router-dom";

import { IconNavLinkComponent } from "../IconNavLinkComponent/IconNavLinkComponent";
import { IconTable } from "../../service/IconTable";
import { ImageTable } from "../../service/ImageTable";

import "./TopNavBarComponent.scss";

export class TopNavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.state.left = false;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleMenuSideNav = this.toggleMenuSideNav.bind(this);
    this.closeMenuSideNav = this.closeMenuSideNav.bind(this);
  }

  static defaultProps = {
    // theme: "white-black",
    theme: "black-white",
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
      left: false,
    });
    console.log(this.state);
  }

  toggleMenuSideNav = () => {
    this.setState((prevState) => ({
      left: !prevState.left,
    }));
  };

  closeMenuSideNav = () => {
    this.setState((prevState) => ({
      left: false,
    }));
  };

  render() {
    let shouldShowWebElements = this.state.width >= 1200;
    let topNavCenterElement;
    let topNavRightElement;
    let MenuSideNav;
    if (this.state.left) {
      MenuSideNav = (
        <div className="menu-side-nav-wrapper">
          <div className="menu-side-nav-content-wrapper">
            <div className="intro-wrapper">
              <div className="logo-wrapper">
                <IconNavLinkComponent
                  width="6rem"
                  height="3.5rem"
                  imgSrc={ImageTable.LOGO.COLOR}
                  linkTo="/home"
                />
              </div>
              <div className="title-wrapper"></div>
              <div className="subtitle-wrapper">
                NONPROFIT CONSULTING ORGANIZATION
              </div>
            </div>
            <div className="nav-items-wrapper">
              <NavLink to={`/home`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper"></div>
                  <div className="text-wrapper">HOME</div>
                </div>
              </NavLink>
              <NavLink to={`/about`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper"></div>
                  <div className="text-wrapper">ABOUT US</div>
                </div>
              </NavLink>
              <NavLink to={`/members`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper"></div>
                  <div className="text-wrapper">MEMBERS</div>
                </div>
              </NavLink>
              <NavLink to={`/career`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper"></div>
                  <div className="text-wrapper">CAREER</div>
                </div>
              </NavLink>
              <NavLink to={`/service`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper"></div>
                  <div className="text-wrapper">SERVICE</div>
                </div>
              </NavLink>
              <NavLink to={`/contact`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper"></div>
                  <div className="text-wrapper">CONTACT</div>
                </div>
              </NavLink>
            </div>
          </div>
          <div
            className="menu-side-nav-background-wrapper"
            onClick={this.closeMenuSideNav}
          ></div>
        </div>
      );
    } else {
      MenuSideNav = null;
    }

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
              linkTo="contact"
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
            onClick={this.toggleMenuSideNav}
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
            {/* ROUTE */}
          </NavLink>
        </div>

        {topNavCenterElement}

        <div className="top-nav-bar-right-wrapper">{topNavRightElement}</div>

        {MenuSideNav}
      </div>
    );
  }
}

// export default TopNavBarComponent;

// console.log(window.location.pathname);
