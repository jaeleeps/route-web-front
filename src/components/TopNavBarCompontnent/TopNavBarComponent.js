import React from 'react';
import "./TopNavBarComponent.scss";

const TopNavBarComponent = () => {

  return (

    <div className="top-nav-bar-wrapper">
      <div className="title-wrapper">ROUTE</div>
      <div className="nav-tabs-wrapper">
        <div className="nav-item">ABOUT US</div>
        <div className="nav-item">HOME</div>
        <div className="nav-item">CONTACT</div>
      </div>
    </div>
  );
};
export default TopNavBarComponent;
