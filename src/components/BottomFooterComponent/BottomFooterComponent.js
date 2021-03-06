import React from "react";
import { IconNavLinkComponent } from "../IconNavLinkComponent/IconNavLinkComponent";
import { IconTable } from "../../service/IconTable";
import { NavLink, Link } from "react-router-dom";
import "./BottomFooterComponent.scss";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export class BottomFooterComponent extends React.Component {
  static defaultProps = {
    theme: "white-black",
  };

  componentDidMount() {
    console.log(window.location.pathname, this.props.theme);
  }

  render() {
    return (
      <div
        className={`bottom-footer-wrapper ${true ? "web" : "mobile"} ${
          this.props.theme
        }`}
      >
        <div className="bottom-footer-content-wrapper responsive-handler-wrapper">
          <div className="footer-left-content-wrapper footer-side-content-wrapper">
            <div className="title-wrapper">ROUTE</div>
          </div>

          <div className="footer-right-content-wrapper footer-side-content-wrapper">
            <div className="short-cut-items-wrapper">
              {/* <div className="short-cut-item-icon-wrapper">
                <IconNavLinkComponent imgSrc={IconTable.LINKEDIN} linkTo="home" width="1.2rem" height="1.2rem" />
              </div>
              <div className="short-cut-item-icon-wrapper">
                <IconNavLinkComponent imgSrc={IconTable.INSTAGRAM} linkTo="home" width="1.2rem" height="1.2rem" />
              </div>
              <div className="short-cut-item-icon-wrapper">
                <IconNavLinkComponent imgSrc={IconTable.FACEBOOK} linkTo="home" width="1.2rem" height="1.2rem" />
              </div> */}
              <div className="short-cut-items-wrapper">
                <NavLink
                  className="icon-nav-link"
                  target="_blank"
                  to={'/linkedin'}
                  activeClassName="current"
                >
                  <LinkedInIcon />
                </NavLink>
              </div>
              <div className="short-cut-items-wrapper">
                <NavLink
                  className="icon-nav-link"
                  target="_blank"
                  to={'/facebook'}
                  activeClassName="current"
                >
                  <FacebookIcon />
                </NavLink>
              </div>
              <div className="short-cut-items-wrapper">
                <NavLink
                  className="icon-nav-link"
                  target="_blank"
                  to={'/instagram'}
                  activeClassName="current"
                >
                  <InstagramIcon />
                </NavLink>
              </div>
            </div>

            {/* <div className="credit-text-wrapper">
              <span className="credit-desc-text">Website design by</span>
              <span className="credit-name-text"> H.A.CHOO & J.Y.LEE</span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
