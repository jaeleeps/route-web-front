import React from "react";
import { NavLink } from 'react-router-dom'
import "./IconNavLinkComponent.scss";
export class IconNavLinkComponent extends React.Component {

  static defaultProps = {
    theme: 'white',
    width: '1.6rem',
    height: '1.6rem',
    imgSrc: '',
    linkTo: '/',
  };

  componentDidMount() {
    console.log(window.location.pathname, this.props.theme);
  }
  
  render() {
    return (
      <div className=
      {
        `icon-nav-link-wrapper ${true ? "web" : "mobile"} ${this.props.theme}`
      }
        // width={this.props.width}
        // height={this.props.height}
        // backgroundImage={this.props.imgSrc}
        style={{ 
          backgroundImage: `url(${this.props.imgSrc})`,
          width: `${this.props.width}`,
          height: `${this.props.height}`,
        }}
      >

        <NavLink className="icon-nav-link" to={this.props.linkTo} activeClassName="current">
        </NavLink>
      </div>
    );
  }
}