import React from "react";
import { NavLink } from 'react-router-dom'
import "./TopNavBarComponent.scss";
export class TopNavBarComponent extends React.Component {

  static defaultProps = {
    theme: 'white-black'
  };

  componentDidMount() {
    console.log(window.location.pathname, this.props.theme);
  }
  
  render() {
    return (
      <div className=
      {
        `top-nav-bar-wrapper ${true ? "web" : "mobile"} ${this.props.theme}`}>
        <div className="title-wrapper">
          <NavLink to={`/`} activeClassName="current">
            ROUTE
          </NavLink>
        </div>
  
        <div className="nav-tabs-wrapper">
          <div className="nav-item">
            <NavLink to={`/about`} activeClassName="current">
              ABOUT US
            </NavLink>
          </div>
          {/* <div className="nav-item">
            <Link to={`/home`} activeClassName="current">HOME</Link>
          </div> */}
          <div className="nav-item">
            <NavLink to={`/`} activeClassName="current">
              MEMBERS
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to={`/`} activeClassName="current">
              CAREER
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to={`/`} activeClassName="current">
              SERVICE
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to={`/contact`} activeClassName="current">
              CONTACT
            </NavLink>
          </div>
        </div>
  
        <div className="short-cut-items-wrapper">
          <div className="short-cut-item-icon-wrapper"></div>
          <div className="short-cut-item-icon-wrapper"></div>
          <div className="short-cut-item-icon-wrapper"></div>
        </div>
      </div>
    );
  }
}

// export default TopNavBarComponent;

// console.log(window.location.pathname);