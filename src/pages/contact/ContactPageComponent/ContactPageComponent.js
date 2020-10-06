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

const axios = require("axios");

class ContactPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.sendReq = this.sendReq.bind(this);
    this.resetFormField = this.resetFormField.bind(this);
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

  resetFormField() {
    console.log(this.refs)
    setImmediate(() => {
      this.refs.NativeDom_NameTextarea.value = ''
      this.refs.NativeDom_CompanyTextarea.value = ''
      this.refs.NativeDom_MessageTextarea.value = ''
      this.refs.NativeDom_MobileTextarea.value = ''
      this.refs.NativeDom_EmailTextarea.value = ''
    }, 1000)
  }

  sendReq() {
    const requestHeader = { headers: { 'Content-Type': 'application/json' } };
    const requestData = {
      email: 'jaeleeps@gmail.com'
    }
    const requestUrl = 'http://localhost:3001/api/nodemailerTest';
    axios.post(
      requestUrl,
      requestData,
      requestHeader,
    ).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
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
          <LinkedInIcon style={{ color: "#000000", fontSize: 28 }} />
        );
      } else if (card.data.title === "Facebook") {
        contactIcon = (
          <FacebookIcon style={{ color: "#000000", fontSize: 28 }} />
        );
      } else if (card.data.title === "Instagram") {
        contactIcon = (
          <InstagramIcon style={{ color: "#000000", fontSize: 28 }} />
        );
      } else if (card.data.title === "Email") {
        contactIcon = <EmailIcon style={{ color: "#000000", fontSize: 28 }} />;
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
          {/* <div className="icon-wrapper" style={{ borderColor: card.color }}> */}
          <div className="icon-wrapper">
            {contactIcon}
            {/* <span className={`title ${this.state.width >= 720 ? '' : 'hide'}`}>{card.data.title.toUpperCase()}</span> */}
            <span className={`title`}>{card.data.title.toUpperCase()}</span>
          </div>
          {bottomItem}
        </div>
      );
    });

    let responsiveWrapper =
      this.state.width >= 720 ? (
        <div className="contact-text-wrapper">
          <div className="column-wrapper">{contactItems.slice(0, 2)}</div>
          <div className="column-wrapper">{contactItems.slice(2, 4)}</div>
        </div>
      ) : (
        <div className="contact-text-wrapper">
          <div className="column-wrapper">{contactItems}</div>
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

              {/* <div style={{backgroundColor:'red'}} onClick={() => this.sendReq()}>send</div> */}

              {responsiveWrapper}

              <div className="title-wrapper last">
                <div className="title-text">SEND EMAIL</div>
                <div className="title-line"></div>
              </div>

              <form className="send-email-gform shadow-2" method="POST" data-email="example@email.net" action="https://script.google.com/macros/s/AKfycbyhrMbA5F4tfbMlhRbojvLTCIEz6UujxMb6vzlKVuCiS6WFp1Dp/exec">

                <div className="form-elements">
                  {/* <!--text-field--> */}
                  <div className="pure-group mobile-wrapper">
                    <label htmlFor="text" className="title">NAME</label>
                    {/* <input id="text" name="text" value="What your Mom calls you" /> */}
                    <div className="textarea-wrapper">
                      <textarea id="name" ref="NativeDom_NameTextarea" name="name" rows="1" defaultValue=""></textarea>
                    </div>
                  </div>

                  <div className="pure-group mobile-wrapper">
                    <label htmlFor="company" className="title">COMPANY</label>
                    {/* <input id="text" name="text" value="What your Mom calls you" /> */}
                    <div className="textarea-wrapper">
                      <textarea id="name" ref="NativeDom_CompanyTextarea" name="company" rows="1" defaultValue=""></textarea>
                    </div>
                  </div>

                  {/* <!--text-area--> */}
                  <div className="pure-group message-wrapper">
                    <label htmlFor="text-area" className="title">MESSAGE</label>
                    <div className="textarea-wrapper">
                      <textarea id="message" ref="NativeDom_MessageTextarea" name="message" rows="8" defaultValue=""></textarea>
                    </div>
                  </div>

                  <div className="pure-group mobile-wrapper">
                    <label htmlFor="mobile" className="title">MOBILE</label>
                    {/* <input id="text" name="text" value="What your Mom calls you" /> */}
                    <div className="textarea-wrapper">
                      <textarea id="name" ref="NativeDom_MobileTextarea" name="mobile" rows="1" defaultValue=""></textarea>
                    </div>
                  </div>

                  {/* <!--email--> */}
                  <div className="pure-group email-wrapper">
                    <label htmlFor="email" className="title">EMAIL</label>
                    {/* <input id="email" name="email" type="email" required value="your.name@email.com" /> */}
                    <div className="textarea-wrapper">
                      <textarea id="email" ref="NativeDom_EmailTextarea" name="email" rows="1" defaultValue=""></textarea>
                    </div>
                  </div>

                  {/* <!--submit/button--> */}
                  <button className="button-success pure-button button-xlarge" onClick={() => this.resetFormField()}>
                    SEND
                  </button>

                </div>
              </form>



            </div>
          </div>

          <BottomFooterComponent theme="black-white" />
        </div>
      </div>
    );
  }
}
export default ContactPageComponent;
