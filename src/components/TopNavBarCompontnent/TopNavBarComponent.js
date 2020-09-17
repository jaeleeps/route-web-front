import React from "react";
import { Link } from "react-router-dom";
import "./TopNavBarComponent.scss";

const TopNavBarComponent = () => {
  return (
    <div className="top-nav-bar-wrapper">
      <div className="title-wrapper">
        <Link to={`/`} activeClassName="current">
          ROUTE
        </Link>
      </div>

      <div className="nav-tabs-wrapper">
        <div className="nav-item">
          <Link to={`/about`} activeClassName="current">
            ABOUT US
          </Link>
        </div>
        {/* <div className="nav-item">
          <Link to={`/home`} activeClassName="current">HOME</Link>
        </div> */}
        <div className="nav-item">
          <Link to={`/`} activeClassName="current">
            MEMBERS
          </Link>
        </div>
        <div className="nav-item">
          <Link to={`/`} activeClassName="current">
            CAREER
          </Link>
        </div>
        <div className="nav-item">
          <Link to={`/`} activeClassName="current">
            SERVICE
          </Link>
        </div>
        <div className="nav-item">
          <Link to={`/contact`} activeClassName="current">
            CONTACT
          </Link>
        </div>
      </div>

      <div className="short-cut-items-wrapper">
        <div className="short-cut-item-icon-wrapper"></div>
        <div className="short-cut-item-icon-wrapper"></div>
        <div className="short-cut-item-icon-wrapper"></div>
      </div>
    </div>
  );
};
export default TopNavBarComponent;
