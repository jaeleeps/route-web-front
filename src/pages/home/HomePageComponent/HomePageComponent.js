import React, { Component } from 'react';
import { TopNavBarComponent } from '../../../components/TopNavBarCompontnent/TopNavBarComponent'
import "./HomePageComponent.scss";

class HomePageComponent extends Component {
  render() {
    return (
      <div className="home-page-component-wrapper page-component-wrapper">
         <TopNavBarComponent theme="transparent-black"/>
        HOME PAGE
      </div>
    );
  }
}
export default HomePageComponent;