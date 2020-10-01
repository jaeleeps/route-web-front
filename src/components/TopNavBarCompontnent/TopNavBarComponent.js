import React from "react";
import { NavLink, Redirect } from "react-router-dom";

import { IconNavLinkComponent } from "../IconNavLinkComponent/IconNavLinkComponent";
import { IconTable } from "../../service/IconTable";
import { ImageTable } from "../../service/ImageTable";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import NextWeekIcon from "@material-ui/icons/NextWeek";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import ContactsIcon from "@material-ui/icons/Contacts";

import CloseIcon from "@material-ui/icons/Close";

import "./TopNavBarComponent.scss";

import LanguageIcon from "@material-ui/icons/Language";

export class TopNavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    this.state.left = false;
    this.state.showLangugeModal = false;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleLanguageModal = this.toggleLanguageModal.bind(this);
    this.closeLanguageModal = this.closeLanguageModal.bind(this);
    this.toggleMenuSideNav = this.toggleMenuSideNav.bind(this);
    this.closeMenuSideNav = this.closeMenuSideNav.bind(this);

    // this.selectLanguage = this.selectLanguage.bind(this);
    this.selectKorean = this.selectKorean.bind(this);
    this.selectEnglish = this.selectEnglish.bind(this);
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
    // console.log(this.state);
  }

  selectLanguage = (language) => {
    console.log("sl", language);
    localStorage.setItem("selected_language", language);
    this.closeLanguageModal();
    // window.location = window.location;
    window.location.reload(false);
  };

  selectKorean = () => this.selectLanguage("korean");
  selectEnglish = () => this.selectLanguage("english");

  toggleLanguageModal = () => {
    console.log("122")
    this.setState((prevState) => ({
      ...prevState,
      showLangugeModal: !prevState.showLangugeModal,
    }));
    console.log(this.state);
  };

  closeLanguageModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      showLangugeModal: false,
    }));
  };

  toggleMenuSideNav = () => {
    this.setState((prevState) => ({
      ...prevState,
      left: !prevState.left,
    }));
  };

  closeMenuSideNav = () => {
    this.setState((prevState) => ({
      ...prevState,
      left: false,
    }));
  };

  render() {
    let shouldShowWebElements = this.state.width >= 1200;
    let topNavCenterElement;
    let topNavRightElement;
    let LanguageModal;
    let MenuSideNav;

    if (this.state.showLangugeModal) {
      LanguageModal = (
        <div
          className="menu-language-modal-wrapper"
          // onClick={() => this.closeLanguageModal()}
        >
          <div className="menu-language-modal-content-wrapper shadow-3">
            <CloseIcon
              className="close-button"
              onClick={() => this.closeLanguageModal()}
            />
            <div className="title-wrapper">
              <LanguageIcon className="language-icon" />
              <div className="title-text"> SELECT LANGUAGE </div>
            </div>
            <div className="language-buttons-wrapper">
              <div
                className={`language-button-item ${
                  localStorage.getItem("selected_language") !== "korean"
                    ? "selected"
                    : ""
                }`}
                onClick={() => this.selectEnglish()}
              >
                <div className="usa national-flag-icon-wrapper"></div>
                <div className="text">ENG</div>
              </div>
              <div
                className={`language-button-item ${
                  localStorage.getItem("selected_language") === "korean"
                    ? "selected"
                    : ""
                }`}
                onClick={() => this.selectKorean()}
              >
                <div className="korea national-flag-icon-wrapper"></div>
                <div className="text">한국어</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      LanguageModal = null;
    }

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

            <div className="divider"></div>

            <div className="nav-items-wrapper">
              <NavLink to={`/home`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper">
                    <HomeIcon />
                  </div>
                  <div className="text-wrapper">HOME</div>
                </div>
              </NavLink>
              <NavLink to={`/about`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper">
                    <InfoIcon />
                  </div>
                  <div className="text-wrapper">ABOUT US</div>
                </div>
              </NavLink>
              <NavLink to={`/members`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper">
                    <SupervisedUserCircleIcon />
                  </div>
                  <div className="text-wrapper">MEMBERS</div>
                </div>
              </NavLink>
              <NavLink to={`/projects`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper">
                    <NextWeekIcon />
                  </div>
                  <div className="text-wrapper">PROJECTS</div>
                </div>
              </NavLink>
              <NavLink to={`/service`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper">
                    <LaptopChromebookIcon />
                  </div>
                  <div className="text-wrapper">SERVICE</div>
                </div>
              </NavLink>
              <NavLink to={`/contact`} activeClassName="current">
                <div className="nav-item">
                  <div className="icon-wrapper">
                    <ContactsIcon />
                  </div>
                  <div className="text-wrapper">CONTACT</div>
                </div>
              </NavLink>
            </div>

            <div className="divider"></div>

            <div className="tools-wrapper">
              <div className="nav-item" onClick={() => this.toggleLanguageModal()}>
                <div className="icon-wrapper">
                  <LanguageIcon />
                </div>
                <div className="text-wrapper">SELECT LANGUAGE</div>
              </div>
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
            <NavLink to={`/projects`} activeClassName="current">
              PROJECTS
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
            {/* <IconNavLinkComponent
              imgSrc={
                this.props.theme === "white-black"
                  ? IconTable.LANGUAGE.BLACK
                  : IconTable.LANGUAGE.WHITE
              }
              linkTo="home"
            /> */}

            <LanguageIcon onClick={() => this.toggleLanguageModal()} />
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
        {LanguageModal}
      </div>
    );
  }
}

// export default TopNavBarComponent;

// console.log(window.location.pathname);
