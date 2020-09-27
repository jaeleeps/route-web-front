import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import { ImageTable } from "../../../service/ImageTable";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ContactPageComponent.scss";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

class ContactPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
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
    let contactItems = StringTable.CONTACT.MAIN.CARDS.map((card) => {
      let contactIcon;
      // switch (card.data.title) {
      //   case "LinkedIn":
      //     contactIcon = (<LinkedInIcon style={{ color: card.color, fontSize: 32}}/>)
      //   case "Facebook":
      //     contactIcon = (<FacebookIcon style={{ color: card.color, fontSize: 32}}/>)
      //   case "Instagram":
      //     contactIcon = (<InstagramIcon style={{ color: card.color, fontSize: 32}}/>)
      //   case "Email":
      //     contactIcon = (<EmailIcon style={{ color: card.color, fontSize: 32}}/>)
      // }
      if (card.data.title === "LinkedIn") {
        contactIcon = (
          <LinkedInIcon style={{ color: card.color, fontSize: 42 }} />
        );
      } else if (card.data.title === "Facebook") {
        contactIcon = (
          <FacebookIcon style={{ color: card.color, fontSize: 42 }} />
        );
      } else if (card.data.title === "Instagram") {
        contactIcon = (
          <InstagramIcon style={{ color: card.color, fontSize: 42 }} />
        );
      } else if (card.data.title === "Email") {
        contactIcon = <EmailIcon style={{ color: card.color, fontSize: 42 }} />;
      }


      const bottomItem = card.data.hasUrl ? (
        <div className="bottom-wrapper">  
          <NavLink
            className="move-btn button"
            target="_blank"
            to={card.data.hashNav}
            style={{ backgroundColor: card.color }}
          >
            {card.data.title.toUpperCase()}
          </NavLink>
          <CopyToClipboard text={card.data.url}>
            <div className="copy-btn button" style={{ backgroundColor: card.color }}>
              COPY LINK
            </div>
          </CopyToClipboard>
        </div>
      ) : (
        <div className="bottom-wrapper">
          <CopyToClipboard text={card.data.email}>
            <div className="copy-btn button" style={{ backgroundColor: card.color }}>
              COPY EMAIL
            </div>
          </CopyToClipboard>
        </div>
      )


      return (
        <div className="card-wrapper shadow-2">
          <div className="icon-wrapper" style={{ borderColor: card.color }}>
            {contactIcon}
          </div>
          {bottomItem}
        </div>
      );
    });

    let responsiveWrapper =
      this.state.width >= 720 ? (
        <div className="contact-text-wrapper">
          <div className="row-wrapper">{contactItems}</div>
        </div>
      ) : (
        <div className="contact-text-wrapper">
          <div className="row-wrapper">{contactItems.slice(0, 2)}</div>
          <div className="row-wrapper">{contactItems.slice(2, 4)}</div>
        </div>
      );

    return (
      <div className="contact-page-component-wrapper page-component-wrapper">
        <div className="contact-page-main-content-wrapper">
          <TopNavBarComponent theme="black-white" />

          <div className="contact-page-img-banner-wrapper"></div>

          <div className="contact-page-main-content-inner-wrapper">
            <div className="contact-content-wrapper responsive-handler-wrapper">
              <div className="title-wrapper">
                <div className="title-text">CONTACT</div>
                <div className="title-line"></div>
              </div>

              <div className="logo-wrapper"></div>

              {responsiveWrapper}
              {/* <div className="contact-text-wrapper">
                {contactItems}
              </div> */}
            </div>
          </div>

          <BottomFooterComponent theme="black-white" />
        </div>
      </div>
    );
  }
}
export default ContactPageComponent;
